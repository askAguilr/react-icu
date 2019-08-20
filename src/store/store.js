import {useReduxState,useBindActionCreators} from 'react-redux-human-hooks';
import {actions} from './actions';


const useBoundActions = (act=actions)=>{
    return useBindActionCreators(act);
}

export {actions,useBoundActions,useReduxState};