import React, { useRef, useState } from "react";
import {useSelector} from 'react-redux';
import Editor from "@monaco-editor/react";
 
const CodeEditor= props =>{
  console.log("Code editor render");
  const {onChange} = props;
  //const [isEditorReady, setIsEditorReady] = useState(false);
  const editorRef = useRef();
  const code = useSelector(state=>state.code);

  const BAD_WORD = "eval";
  const WORNING_MESSAGE = " <- This is dangerous";

  function handleEditorDidMount(_valueGetter,editor) {
    //setIsEditorReady(true);
    editorRef.current = editor;
    editorRef.current.onDidChangeModelContent(ev => {
      const value=editorRef.current.getValue();
      onChange(value.includes(BAD_WORD) && !value.includes(WORNING_MESSAGE)
      ? value.replace(BAD_WORD, BAD_WORD + WORNING_MESSAGE)
      : value.includes(WORNING_MESSAGE) && !value.includes(BAD_WORD)
        ? value.replace(WORNING_MESSAGE, "")
        : value);
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