import React from 'react';
import {store,Provider} from './store/store';
import './App.css';
import Editor from './containers/Editor';

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
