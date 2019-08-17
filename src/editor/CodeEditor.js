import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
 
const CodeEditor= props =>{
  const {code,onChange} = props;
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();
 
  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }
 
  function handleShowValue() {
    alert(valueGetter.current());
  }
 
  return (
    <>
      <Editor
        height="100vh"
        language="javascript"
        theme='dark'
        value={code}
        editorDidMount={handleEditorDidMount}
        onChange={onChange}
      />
    </>
  );
}

export default CodeEditor;