import React,{useState,useEffect,useRef} from 'react';
//import CodeEditor from './CodeEditor'
import codeTemplate,{buildTestCode} from '../services/codeService'


import HTMLtoJSX from 'htmltojsx';

///New ordered imports
import DesignEditor from './DesignEditor/DesignEditor';
import CodeEditor from './CodeEditor/CodeEditor';
import TestingEditor from './TestingEditor/TestingEditor';

const jsxConverter = new HTMLtoJSX({
    createClass: false,
    outputClassName: 'ReactWeaverComponent'
  });


function Editor() {
  const [mode,setMode] = useState('design');
  const [code,setCode] = useState('');
  

  const handleCode = (newValue)=>{
    console.log(newValue)
    setCode(newValue);
  }

  const handleTab = (mode) => {
    setMode(mode);
    switch(mode){
      case 'design':
          break;
      case 'code':
          break;
      case 'test':
          break;
      default:
    }    
  }

  return (
    <>
      <NavBar/>
      <div id="design" style={{display:mode==='design'?'block':'none'}}>
          <DesignEditor/>
      </div>
      <div id="code" style={{display:mode==='code'?'block':'none'}}>
          <CodeEditor code={code} onChange={handleCode}/>
      </div>
      <div id="test" style={{display:mode==='test'?'block':'none'}}>
        <TestingEditor/>
      </div>
    </>
  );
}


export default Editor;
import React,{useState,useEffect,useRef} from 'react';
//import CodeEditor from './CodeEditor'
import codeTemplate,{buildTestCode} from '../services/codeService'


import HTMLtoJSX from 'htmltojsx';

///New ordered imports
import DesignEditor from './DesignEditor/DesignEditor';
import CodeEditor from './CodeEditor/CodeEditor';
import TestingEditor from './TestingEditor/TestingEditor';

const jsxConverter = new HTMLtoJSX({
    createClass: false,
    outputClassName: 'ReactWeaverComponent'
  });


function Editor() {
  const [mode,setMode] = useState('design');
  const [code,setCode] = useState('');
  

  const handleCode = (newValue)=>{
    console.log(newValue)
    setCode(newValue);
  }

  const handleTab = (mode) => {
    setMode(mode);
    switch(mode){
      case 'design':
          break;
      case 'code':
          break;
      case 'test':
          break;
      default:
    }    
  }

  return (
    <>
      <NavBar/>
      <div id="design" style={{display:mode==='design'?'block':'none'}}>
          <DesignEditor/>
      </div>
      <div id="code" style={{display:mode==='code'?'block':'none'}}>
          <CodeEditor code={code} onChange={handleCode}/>
      </div>
      <div id="test" style={{display:mode==='test'?'block':'none'}}>
        <TestingEditor/>
      </div>
    </>
  );
}


export default Editor;
