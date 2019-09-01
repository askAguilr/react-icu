import {createReducer} from 'react-redux-human-hooks'
import * as actions from '../store/actions';
console.log(actions);

const initialState = { 
    editorTab: 'design',
    html:'',
    css:'',
    code:'',
    preview:'',
    imports:{
        css:[],
        js:[],
    }
}

const reducer = createReducer(
    {
        [actions.setPreview]: (state, action) => ({
            ...state,
            preview: action.payload
        }),
        [actions.setHtml]: (state, action) => ({
            ...state,
            html: action.payload
        }),
        [actions.setCss]: (state, action) => ({
            ...state,
            css: action.payload
        }),
        [actions.setCode]: (state, action) => ({
            ...state,
            code: action.payload
        }),
        [actions.setEditorTab]: (state, action) => ({
            ...state,
            editorTab: action.payload
        }),
        [actions.newComponent]: (state, action) => ({
            ...initialState,
            code:action.payload.code,
        }),
    },
    //Initial state
    {...initialState}
);


export default reducer;