import {createAction,createActions} from 'react-redux-human-hooks';

const actions = {
    ...createActions('SET_PREVIEW','SET_EDITOR_TAB','SET_HTML','SET_CODE')
}

export {actions};





