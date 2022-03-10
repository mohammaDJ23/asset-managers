import { Actions, AllActions, ChangeStepAction, StepState } from '../../types';

const initialState: StepState = {
  step: 0,
};

function changeStep(state: StepState, action: ChangeStepAction) {
  return {
    ...state,

    step: action.payload.step <= 0 ? 0 : action.payload.step,
  };
}

export function reducer(state: StepState = initialState, action: AllActions) {
  switch (action.type) {
    case Actions.CHANGE_STEP:
      return changeStep(state, action);

    default:
      return state;
  }
}
