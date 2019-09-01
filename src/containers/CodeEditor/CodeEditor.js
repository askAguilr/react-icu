import React, { useRef} from "react";
import {useReduxState,useBoundActions} from '../../modules/react-redux-thunk-easy';
import Editor from "@monaco-editor/react";

const CodeEditor= props =>{
  console.log("Code editor render");
  const editorRef = useRef();
  const code = useReduxState(state=>state.code);
  const {setCode} =  useBoundActions();
  
  function handleEditorDidMount(_valueGetter,editor) {
    editorRef.current = editor;
    editorRef.current.onDidChangeModelContent(ev => {
      const value=editorRef.current.getValue();
      setCode(value);
    });
  }
 
  return (
    <>
      <Editor
        height="100vh"
        language="javascript"
        theme='dark'
        value={code}
        editorDidMount={handleEditorDidMount}
      />
    </>
  );
}

export default CodeEditor;