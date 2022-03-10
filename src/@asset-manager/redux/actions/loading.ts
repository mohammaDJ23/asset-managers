import { Actions, ErrorAction, LoadingAction, SuccessAction } from '../../types';

export function loading(loading: string): LoadingAction {
  return {
    type: Actions.LOADING,
    payload: { loading },
  };
}

export function error(error: string, loading: string): ErrorAction {
  return {
    type: Actions.ERROR,
    payload: { error, loading },
  };
}

export function success(data: any, loading: string): SuccessAction {
  return {
    type: Actions.SUCCESS,
    payload: { loading, data },
  };
}
