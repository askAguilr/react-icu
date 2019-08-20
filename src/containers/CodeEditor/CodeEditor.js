import React, { useRef,useMemo} from "react";
import {actions,useReduxState,useBindActionCreators} from '../../services/reduxService';
import Editor from "@monaco-editor/react";


const CodeEditor= props =>{
  console.log("Code editor render");
  const editorRef = useRef();
  const code = useReduxState(state=>state.code);
  const {setCode} =  useBindActionCreators(actions);
  
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