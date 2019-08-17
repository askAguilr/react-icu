import React, { useRef, useState } from "react";
import {LiveProvider,LiveEditor,LiveError,LivePreview} from 'react-live'

const TestingEditor= props =>{
 
  return (
    <div style={{backgroundColor:'white'}}>
        This is the test editor
    </div>

    /* <LiveProvider code={code} noInline={true}>
              {console.log(code)}
              <LiveEditor/>
              <LiveError />
              <LivePreview />
            </LiveProvider>*/
  );
}

export default TestingEditor;