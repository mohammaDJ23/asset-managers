import { TypedUseSelectorHook, useSelector as useSelectorRedux } from 'react-redux';
import { RootState } from '../redux';

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
