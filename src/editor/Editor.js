import React,{useState,useEffect} from 'react';
import {Navbar,Nav,Form,FormControl,Button, ButtonGroup} from 'react-bootstrap';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import blocks from './blocks'
import style from './style'
import storage from  './storage'
import {plugins,pluginsOpts} from './plugins'
import CodeEditor from './CodeEditor'

let editor;
function Editor() {
  const [mode,setMode] = useState('design');

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
  
  return (
    <>
      <Navbar id="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">ReactWeaver</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={handleNew}>New</Nav.Link>

            <Button variant="secondary">Initialize</Button>
          </Nav>
          <Nav className="mr-auto">
           <ButtonGroup aria-label="View mode">
              <Button onClick={setMode.bind(this,'design')} variant="outline-light">Design</Button>
              <Button onClick={setMode.bind(this,'code')}  variant="outline-light">Code</Button>
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
   
          <CodeEditor/>
   
      </div>
    </>
  );
}

export default Editor;
