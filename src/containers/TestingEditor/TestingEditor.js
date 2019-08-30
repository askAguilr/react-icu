import React, { useRef, useState } from "react";
import {useReduxState} from '../../store/store';
import {LiveProvider,LiveEditor,LiveError,LivePreview} from 'react-live'

const TestingEditor= props =>{
  const {code} = useReduxState(state=>state);
  return (
    <div style={{backgroundColor:'white'}}>
        <LiveProvider code={code} noInline={true}>
              {console.log(code)}
              <LiveEditor/>
              <LiveError />
              <LivePreview />
            </LiveProvider>
    </div>
  );
}

export default TestingEditor;