import { combineReducers } from 'redux';
import { reducer as formReducer } from './form';
import { reducer as stepReducer } from './step';
import { reducer as requestProcessReducer } from './loading';

const reducers = combineReducers({
  formReducer,
  stepReducer,
  requestProcessReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
