/**
 * React Redux Human Hooks
 *
 * React-Redux hooks for human beings
 *
 * @link   https://github.com/askAguilr/react-redux-human-hooks
 * @author Daniel Aguilar Fuentes
 */

import {useCallback} from 'react';
import {bindActionCreators} from 'redux';
import {useSelector,useDispatch} from 'react-redux';
import {handleActions, createAction} from 'redux-actions';
import changeCase from 'change-case';

export {useDispatch,createAction};


export const useReduxState = (selector,deps) => {
    return useCallback(useSelector(selector),deps);
}

export const useBindActionCreators = (actions) => {
    const dispatch = useDispatch();
    return useCallback(bindActionCreators(actions, dispatch),[actions,dispatch]);
}

export const createReducer = (rootReducer,defaultState) => {
    return handleActions(rootReducer,defaultState);
};

export const createActions = (...params) =>{
    let ret = {};
    params.forEach(actionType=>{
        const camelActionType = changeCase.camelCase(actionType);
        const constantActionType = changeCase.constantCase(actionType);
        if(constantActionType!==actionType){
            console.warn(`Action types should be declared using COSTANT_CASE notation`
            `Expecting ${constantActionType} but ${actionType} was found.`)
        }
        ret[camelActionType]=createAction(actionType);
    })
    return ret;
};


