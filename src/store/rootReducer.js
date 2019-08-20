import {createReducer} from 'react-redux-human-hooks'
import {actions} from '../store/actions';
console.log(actions);


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