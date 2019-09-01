import {createActions,createThunk} from '../modules/react-redux-thunk-easy';
import {buildTestCode} from '../services/codeService';

export const actions = {
    ...createActions('SET_PREVIEW','SET_EDITOR_TAB','SET_HTML','SET_CSS','SET_CODE','NEW_COMPONENT')
}

export const {
    setPreview,setEditorTab,setHtml,setCss,setCode,newComponent
}=actions;

export const prebuild = createThunk((payload,state,actions)=>{
    console.log("-PREBUILD"+payload);
});

export const build = createThunk((payload,state,actions)=>{
    actions.setPreview(buildTestCode(state.code,state.html,state.css));
},{prebuild})








