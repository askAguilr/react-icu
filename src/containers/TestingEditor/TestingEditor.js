import React, { useRef, useState } from "react";
import {useReduxState} from '../../modules/react-redux-thunk-easy';
import {LiveProvider,LiveEditor,LiveError,LivePreview} from 'react-live'

const TestingEditor= props =>{
  const {preview} = useReduxState(state=>state);
  return (
    <div style={{backgroundColor:'white'}}>
        <LiveProvider code={preview} noInline={true}>
              {console.log(preview)}
              <LiveEditor/>
              <LiveError />
              <LivePreview />
            </LiveProvider>
    </div>
  );
}

export default TestingEditor;