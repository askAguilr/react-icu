import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
 
const CodeEditor= props =>{
  const {code} = props;
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
      <button onClick={handleShowValue} disabled={!isEditorReady}>
        Show value
      </button>
 
      <Editor

        height="90vh"
        language="javascript"
        theme='dark'
        value={code}
        editorDidMount={handleEditorDidMount}
      />
    </>
  );
}

export default CodeEditor;