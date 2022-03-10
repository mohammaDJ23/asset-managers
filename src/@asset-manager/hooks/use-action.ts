import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

export function useAction() {
  const dispatch = useDispatch();

  return useMemo(
    function () {
      return bindActionCreators(actionCreators, dispatch);
    },

    [dispatch],
  );
}
