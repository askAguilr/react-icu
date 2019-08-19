import {createReducer} from 'react-redux-human-hooks'
import * as actions from './actions';

const reducer = createReducer(
    {
        [actions.setPreview]: (state, action) => ({
            ...state,
            preview: action.payload
        }),
        [actions.setHTML]: (state, action) => ({
            ...state,
            html: action.payload
        }),
        [actions.setCode]: (state, action) => ({
            ...state,
            code: action.payload
        }),
        [actions.setEditorTab]: (state, action) => ({
            ...state,
            editorTab: action.payload
        }),
    },
    //Initial state
    { 
        editorTab: 'code',
        html:'',
        code:'',
        preview:'',
        imports:{
            css:[],
            js:[],
        }
    }
);


export default reducer;