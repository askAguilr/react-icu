import React,{useState,useEffect} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import exportPlugin from 'grapesjs-plugin-export';
import HTMLtoJSX from 'htmltojsx';
import blocks from './blocks'
import style from './style'
import storage from  './storage'
const jsxConverter = new HTMLtoJSX({
  createClass: false,
  outputClassName: 'ReactWeaverComponent'
});

let editor;
function Editor() {
  useEffect(()=>{
    editor = grapesjs.init({
        container: '#gjs',
        fromElement: true,
        storageManager: storage,
        panels: { defaults: [] },
        blockManager: {
          appendTo: '#blocks',
          blocks: blocks
        },
        styleManager: style,
          layerManager: {
            appendTo: '.layers-container'
          },
          plugins: [exportPlugin],
          pluginsOpts: {
             [exportPlugin]: { 
                filenamePfx:'react-weaver-export',
                root:{
                    component: {
                      'style.css': ed => ed.getCss(),
                      
                      'index.js': ed => `import React from 'react';
                      import './style.css';
                      
                      function ReactWeaverComponent() {
                        return (
                            ${jsxConverter.convert(ed.getHtml())}
                        );
                      }
                      
                      export default ReactWeaverComponent;
                      `,
                    },
                    'made with react weaver.txt': 'Great isn´t it?',
                  }
             }
          },
      });
  });

  const handleExport = ()=>{
      console.log();
    editor.runCommand('gjs-export-zip');
  }
  
  return (
    <div id="editor">
      <Navbar id="navbar" bg="dark" variant="dark">
        <Navbar.Brand href="#home">ReactWeaver</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link >Components</Nav.Link>
          <Nav.Link href="#features">Assets</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button onClick={handleExport} variant="secondary">Export</Button>
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
