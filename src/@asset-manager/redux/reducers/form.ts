import { Actions, FormState, AllActions, OnChangeAction, SetFormAction, InputCleanerAction } from '../../types';
import { inputCleaner, validation } from '../../utilities';

const initialState: FormState = {
  forms: {},
  data: {},
};

function onChange(state: FormState, action: OnChangeAction) {
  const { form, input, value } = action.payload;
  const { isValid, errorText } = validation(state.forms, form, input, value);

  const newState = {
    ...state,

    forms: {
      ...state.forms,

      [form]: {
        ...state.forms[form],

        inputs: {
          ...state.forms[form].inputs,

          [input]: {
            ...state.forms[form].inputs[input],

            value,
            isValid,
            errorText,
          },
        },
      },
    },
  };

  let isFormValid = true;

  for (const input in newState.forms[form].inputs) {
    isFormValid = isFormValid && newState.forms[form].inputs[input].isValid;
  }

  newState.forms[form].isFormValid = isFormValid;

  return newState;
}

function inputsCleaner(state: FormState, action: InputCleanerAction) {
  const { form, input } = action.payload;
  const inputVal = inputCleaner(input);

  return {
    ...state,

    forms: {
      ...state.forms,

      [form]: {
        ...state.forms[form],

        inputs: {
          ...state.forms[form].inputs,

          [input]: {
            ...state.forms[form].inputs[input],

            value: inputVal,
            isValid: false,
            errorText: '',
          },
        },

        isFormValid: false,
      },
    },
  };
}

function setForm(state: FormState, action: SetFormAction) {
  const { forms } = action.payload;

  const newState = {
    ...state,

    forms: (function () {
      const newForms = { ...state.forms };

      for (let i = 0; i < forms.length; i++) {
        for (const form in forms[i]) {
          newForms[form] = forms[i][form];
        }
      }

      return newForms;
    })(),
  };

  return newState;
}

export function reducer(state: FormState = initialState, action: AllActions) {
  switch (action.type) {
    case Actions.ON_CHANGE:
      return onChange(state, action);

    case Actions.SET_FORM:
      return setForm(state, action);

    case Actions.INPUT_CLEANER:
      return inputsCleaner(state, action);

    default:
      return state;
  }
}
