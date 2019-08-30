import {createReducer} from 'react-redux-human-hooks'
import {actions} from '../store/actions';
console.log(actions);

const initialState = { 
    editorTab: 'code',
    html:'',
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
        [actions.setCode]: (state, action) => ({
            ...state,
            code: action.payload
        }),
        [actions.setEditorTab]: (state, action) => ({
            ...state,
            editorTab: action.payload
        }),
        [actions.setPreview]: (state, action) => ({
            ...initialState,
            code:action.payload.code,
        }),
    },
    //Initial state
    {...initialState}
);


export default reducer;