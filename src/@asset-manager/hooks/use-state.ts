import { RootState } from '../redux';
import { useSelector } from '.';

export const useState: () => RootState = () => useSelector(state => state);
