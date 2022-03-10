import { Actions, AllActions, ErrorAction, LoadingAction, RequestProcessState, SuccessAction } from '../../types';

const initialState: RequestProcessState = {
  loading: {},
  error: '',
  data: null,
};

function loading(state: RequestProcessState, action: LoadingAction) {
  const { loading } = action.payload;

  return {
    ...state,

    loading: {
      ...state.loading,

      [loading]: true,
    },

    error: '',
  };
}

function error(state: RequestProcessState, action: ErrorAction) {
  const { error, loading } = action.payload;

  return {
    ...state,

    loading: {
      ...state.loading,

      [loading]: false,
    },

    error,
  };
}

function success(state: RequestProcessState, action: SuccessAction) {
  const { data, loading } = action.payload;

  return {
    ...state,

    loading: {
      ...state.loading,

      [loading]: false,
    },

    error: '',
    data,
  };
}

export function reducer(state: RequestProcessState = initialState, action: AllActions) {
  switch (action.type) {
    case Actions.LOADING:
      return loading(state, action);

    case Actions.ERROR:
      return error(state, action);

    case Actions.SUCCESS:
      return success(state, action);

    default:
      return state;
  }
}
