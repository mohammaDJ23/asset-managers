import { Actions, ChangeStepAction } from '../../types';

export function changeStap(step: number): ChangeStepAction {
  return {
    type: Actions.CHANGE_STEP,
    payload: { step },
  };
}
