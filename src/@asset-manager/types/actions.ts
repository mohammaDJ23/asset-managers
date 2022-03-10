/**
 *
 * form action types
 *
 */

import { Actions, Form } from '.';

export interface OnChangeAction {
  type: Actions.ON_CHANGE;
  payload: { form: string; input: string; value: any };
}

export interface SetFormAction {
  type: Actions.SET_FORM;
  payload: { forms: Form[] };
}

export interface InputCleanerAction {
  type: Actions.INPUT_CLEANER;
  payload: { form: string; input: string };
}

export type FormActions = OnChangeAction | SetFormAction | InputCleanerAction;

/**
 *
 * step action types
 *
 */

export interface ChangeStepAction {
  type: Actions.CHANGE_STEP;
  payload: { step: number };
}

export type StepActions = ChangeStepAction;

/**
 *
 * loading action types
 *
 */

export interface LoadingAction {
  type: Actions.LOADING;
  payload: { loading: string };
}

export interface ErrorAction {
  type: Actions.ERROR;
  payload: { error: string; loading: string };
}

export interface SuccessAction {
  type: Actions.SUCCESS;
  payload: { data: any; loading: string };
}

export type RequestProcessActions = LoadingAction | ErrorAction | SuccessAction;

export type AllActions = FormActions | StepActions | RequestProcessActions;
