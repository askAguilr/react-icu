import React,{useState,useEffect} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import blocks from './blocks'
import style from './style'
import storage from  './storage'
import {plugins,pluginsOpts} from './plugins'

let editor;
function Editor() {
  useEffect(()=>{
    editor = grapesjs.init({
        container: '#gjs',
        canvas:{
          styles:['https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css']
        },
        fromElement: true,
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
  });

  const handleExport = ()=>{
      console.log();
    editor.runCommand('gjs-export-zip');
  }

  const handleNew = ()=>{
    editor.setComponents('')
  }
  
  return (
    <div id="editor">
      <Navbar id="navbar" bg="dark" variant="dark">
        <Navbar.Brand href="#home">ReactWeaver</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={handleNew}>New</Nav.Link>

          <Button variant="secondary">Initialize</Button>
        </Nav>
        <Nav style={{float:'right'}}>
          <Button onClick={handleExport} variant="outline-light">Export</Button>
        </Nav>
      </Navbar>
      <div id='main'>
        <div id='left'>
            <div className="layers-container"></div>
        </div>
        <div id="gjs">
            <h1>Hello World Component!</h1>
        </div>
        <div id='right'>
            <div className="layers-container"></div>
            <div className="styles-container"></div>
        </div>
      </div>
      <div id="blocks"></div>
    </div>
  );
}

export default Editor;
