import React,{useState,useEffect} from 'react';
import {Navbar,Nav,Form,FormControl,Button, ButtonGroup} from 'react-bootstrap';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import blocks from './blocks'
import style from './style'
import storage from  './storage'
import {plugins,pluginsOpts} from './plugins'
import CodeEditor from './CodeEditor'
import HTMLtoJSX from 'htmltojsx';

const jsxConverter = new HTMLtoJSX({
    createClass: false,
    outputClassName: 'ReactWeaverComponent'
  });
  


let editor;
function Editor() {
  const [mode,setMode] = useState('design');
  const [code,setCode] = useState('');

  useEffect(()=>{
    editor = grapesjs.init({
        container: '#gjs',
        canvas:{
          styles:['https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css']
        },
        fromElement: false,
        storageManager: storage,
        panels: { defaults: [] },
        blockManager: {
          appendTo: '#blocks',
          blocks: blocks
        },
        traitManager: {
          appendTo: '.styles-container',
        },
        selectorManager: {
          appendTo: '.styles-container'
        },
        
        styleManager: style,
        layerManager: {
          appendTo: '.layers-container'
        },
        plugins: plugins,
        pluginsOpts: pluginsOpts
        
      });
  },[]);

  const handleExport = ()=>{
      console.log();
    editor.runCommand('gjs-export-zip');
  }

  const handleNew = ()=>{
    editor.setComponents('')
  }

  const handleCode = ()=>{
    setMode('code');
    setCode(
      `import React from 'react';
      import './style.css';
              
      function Component() {
        return (
          ${jsxConverter.convert(editor.getHtml())}
        );
      }
                
      export default Component;`
    );
  }
  
  return (
    <>
      <Navbar id="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React.ICU</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={handleNew}>New</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
           <ButtonGroup aria-label="View mode">
              <Button onClick={setMode.bind(this,'design')} variant="outline-light">Design</Button>
              <Button onClick={handleCode}  variant="outline-light">Code</Button>
            </ButtonGroup>
          </Nav>
          <Nav style={{float:'right'}}>
            <Button onClick={handleExport} variant="outline-light">Export</Button>
          </Nav>
        </Navbar>
      <div id="design" style={{display:mode==='design'?'block':'none'}}>
          <div id='main'>
            <div id='left'>
                <div className="layers-container"></div>
            </div>
            <div id="gjs">
            </div>
            <div id='right'>
                <div className="layers-container"></div>
                <div className="styles-container"></div>
            </div>
          </div>
          <div id="blocks"></div>
      </div>
      <div id="code" style={{display:mode==='code'?'block':'none'}}>
   
          <CodeEditor code={code}/>
   
      </div>
    </>
  );
}

export default Editor;
