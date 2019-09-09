import React, { useRef, useState } from "react";
import {useReduxState} from '../../modules/react-redux-thunk-easy';
import {LiveProvider,LiveError,LivePreview} from 'react-live'
import './TestingEditor.css'

const TestingEditor= props =>{
  const {preview} = useReduxState(state=>state);
  return (
    <div className='test-editor'>
        <LiveProvider code={preview} noInline={true}>
              <LiveError />
              <LivePreview />
        </LiveProvider>
    </div>
  );
}

export default TestingEditor;