import {useMemo} from 'react';
import {bindActionCreators} from 'redux';
import {useSelector,useDispatch} from 'react-redux';

export {useSelector,useDispatch};

export const useBoundActions = (actions) => {
    const dispatch = useDispatch();
    return useMemo(()=>bindActionCreators(actions, dispatch),[actions,dispatch]);
}
