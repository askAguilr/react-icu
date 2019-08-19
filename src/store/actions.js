import {createAction,createActions} from 'react-redux-human-hooks';

export const { setPreview, setEditorTab,setHTML}
 = createActions('SET_PREVIEW','SET_EDITOR_TAB','SET_HTML')

export const setCode = createAction('SET_CODE');






