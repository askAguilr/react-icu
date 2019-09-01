import {Provider,useReduxState,initStore,useBoundActions} from '../modules/react-redux-thunk-easy';
import {actions} from './actions';
import rootReducer from './rootReducer';

const store = initStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    actions
);

export {store, Provider};
