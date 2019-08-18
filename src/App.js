import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducer';

import './App.css';
import Editor from './containers/Editor';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Editor/>
      </div>
    </Provider>
  );
}

export default App;
