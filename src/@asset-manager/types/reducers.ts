/**
 *
 * form state
 *
 */

import { Form, GlobalObj } from '.';

export interface Input {
  value: any;
  isValid: boolean;
  errorText: string;
}

export interface FormState {
  forms: Form;
  data: {};
}

/**
 *
 * step state
 *
 */

export interface StepState {
  step: number;
}

/**
 *
 * request process state
 *
 */

export interface RequestProcessState {
  loading: GlobalObj<boolean>;
  error: string;
  data: any;
}
