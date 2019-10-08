import {createActions,createThunk} from '../modules/react-redux-thunk-easy';
import {buildTestCode,saveCodeStorage,loadCodeStorage} from '../services/codeService';

export const actions = {
    ...createActions('SET_PREVIEW','SET_EDITOR_TAB','SET_HTML','SET_CSS','SET_CODE','NEW_COMPONENT','ADD_DEPENDENCY','REMOVE_DEPENDENCY')
}

export const {
    setPreview,setEditorTab,setHtml,setCss,setCode,newComponent,addDependency,removeDependency
}=actions;

export const build = createThunk((payload,state,actions)=>{
    actions.setPreview(buildTestCode(state.code,state.html,state.css));
},)

export const saveCode = createThunk((payload,state,actions)=>{
    saveCodeStorage(state.code);
},)

export const loadCode = createThunk((payload,state,actions)=>{
    actions.setCode(loadCodeStorage());
},)







