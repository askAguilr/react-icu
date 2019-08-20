import { useBindActionCreators,useReduxState } from "react-redux-human-hooks";
import actions from '../store/actions';

const useBoundActions = (act=actions)=>{
    return useBindActionCreators(act);
}

export {actions,useBindActionCreators,useReduxState,useBoundActions};
