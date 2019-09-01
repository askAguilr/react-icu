import {useReduxState,useBindActionCreators,createActions} from 'react-redux-human-hooks';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose,bindActionCreators} from 'redux';

let store = null;
let acts = null;
let dispatch = null

export const initStore = (reducer,middleware,actions) => {
    acts=actions;
    store = createStore(reducer,compose(applyMiddleware(thunk),middleware));
    dispatch=store.dispatch;
    return store;
}

export const boundActions = (actions=acts)=>{
    return bindActionCreators(actions,store.dispatch);
}

export const useBoundActions = (actions=acts)=>{
    return useBindActionCreators(actions);
}

export const createThunk =  (fn,thunks) =>{
    return payload=>(dispatch,getState)=>{
        return fn(payload,getState(),bindActionCreators({...thunks,...acts},dispatch));
    }
}

export {useReduxState,store, Provider,createActions,applyMiddleware,compose,dispatch};
