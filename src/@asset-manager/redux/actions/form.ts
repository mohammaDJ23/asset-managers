import { Dispatch } from 'react';
import { changeStap, error, loading, success } from '.';
import { RootState } from '..';
import {
  Actions,
  AllActions,
  Form,
  Forms,
  GlobalObj,
  InputCleanerAction,
  OnChangeAction,
  SetFormAction,
} from '../../types';
import { Try } from '../../utilities';
import { Rest } from '../../services';
import { apis } from '../../apis';
import { toast } from 'react-hot-toast';

let loadings = new Map();

export function combineFormsToString(forms: string[]) {
  return forms.join('__');
}

export function combinedForms(forms: string) {
  return forms.includes('__');
}

export function combineFormsToArray(forms: string) {
  return forms.split('__');
}

export function onChange(form: string, input: string, value: any): OnChangeAction {
  return {
    type: Actions.ON_CHANGE,
    payload: { form, input, value },
  };
}

export function setForm(forms: Form[]): SetFormAction {
  return {
    type: Actions.SET_FORM,
    payload: { forms },
  };
}

export function inputCleaner(form: string, input: string): InputCleanerAction {
  return {
    type: Actions.INPUT_CLEANER,
    payload: { form, input },
  };
}

function dismasToast(loading: string) {
  if (loadings.has(loading)) {
    toast.dismiss(loadings.get(loading));

    loadings.delete(loading);
  }
}

function getFormInfo(state: RootState, form: string) {
  let formInfo: GlobalObj<any> = {};

  for (const input in state.formReducer.forms[form].inputs) {
    if (state.formReducer.forms[form].inputs[input].value !== undefined) {
      formInfo[input] = state.formReducer.forms[form].inputs[input].value;
    }
  }

  return formInfo;
}

function formOptimization(state: RootState, form: string) {
  let formInfo: GlobalObj<any> = {};

  if (combinedForms(form)) {
    for (const key of combineFormsToArray(form)) {
      formInfo = Object.assign(formInfo, getFormInfo(state, key));
    }
  } else {
    formInfo = getFormInfo(state, form);
  }

  return formInfo;
}

function formCleaner(dispatch: Dispatch<AllActions>, state: RootState, form: string) {
  if (combinedForms(form)) {
    Array.from(combineFormsToArray(form)).forEach(key => {
      for (const input in state.formReducer.forms[key].inputs) {
        dispatch(inputCleaner(key, input));
      }
    });
  } else {
    for (const input in state.formReducer.forms[form].inputs) {
      dispatch(inputCleaner(form, input));
    }
  }
}

function beforeRequestProcess(state: RootState, form: string) {
  switch (form) {
    default:
      return formOptimization(state, form);
  }
}

function afterRequestProcess(dispatch: Dispatch<AllActions>, state: RootState, form: string) {
  switch (form) {
    case combineFormsToString([Forms.PERSONAL_DETIALS, Forms.ADDRESS_DETAILS]):
      formCleaner(dispatch, state, form);
      dispatch(changeStap(0));
      return;
  }
}

async function requestProcess(dispatch: Dispatch<AllActions>, state: RootState, form: string) {
  const formInfo = beforeRequestProcess(state, form);

  const res = await Rest.req(apis[form](formInfo));

  afterRequestProcess(dispatch, state, form);

  return res;
}

async function sendingInfo(dispatch: Dispatch<AllActions>, state: RootState, form: string) {
  dispatch(loading(form));

  const loadingId = toast.loading('Waitting...', { duration: Infinity });

  loadings.set(form, loadingId);

  const process = Try.async(requestProcess);

  const res = await process(dispatch, state, form);

  dismasToast(form);

  if (res.error) {
    toast.error(res.error);

    dispatch(error(res.error, form));

    return res;
  }

  dispatch(success(res.data, form));

  return res;
}

export function formSubmit(form: string) {
  return async function (dispatch: Dispatch<AllActions>, getState: () => RootState) {
    const state = getState();

    if (state.requestProcessReducer.loading[form]) {
      return;
    }

    return sendingInfo(dispatch, state, form);
  };
}
