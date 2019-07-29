import React,{useState,useEffect} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import exportPlugin from 'grapesjs-plugin-export';
import HTMLtoJSX from 'htmltojsx';

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
        storageManager: {
            id: 'rctw-',             // Prefix identifier that will be used inside storing and loading
            type: 'local',          // Type of the storage
            autosave: true,         // Store data automatically
            autoload: true,         // Autoload stored data on init
            stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
            storeComponents: true,  // Enable/Disable storing of components in JSON format
            storeStyles: true,      // Enable/Disable storing of rules in JSON format
            storeHtml: true,        // Enable/Disable storing of components as HTML string
            storeCss: true,         // Enable/Disable storing of rules as CSS string
        },
        panels: { defaults: [] },
        blockManager: {
            appendTo: '#blocks',
            blocks: [
              {
                id: 'section', // id is mandatory
                label: '<b>Section</b>', // You can use HTML/SVG inside labels
                attributes: { class:'gjs-block-section' },
                content: `<section>
                  <h1>This is a simple title</h1>
                  <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                </section>`,
              }, {
                id: 'text',
                label: 'Text',
                content: '<div data-gjs-type="text">Insert your text here</div>',
              }, {
                id: 'image',
                label: 'Image',
                // Select the component once it's dropped
                select: true,
                // You can pass components as a JSON instead of a simple HTML string,
                // in this case we also use a defined component type `image`
                content: { type: 'image' },
                // This triggers `active` event on dropped components and the `image`
                // reacts by opening the AssetManager
                activate: true,
              }
            ]
          },
          styleManager: {
            appendTo: '.styles-container',
            sectors: [{
                name: "General",
                open: false,
                buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
              },{
                name: "Layout",
                open: false,
                buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
              },{
                name: "Typography",
                open: false,
                buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
                properties: [{
                  property: 'text-align',
                  list: [
                      { value: 'left', className: 'fa fa-align-left' },
                      { value: 'center', className: 'fa fa-align-center'  },
                      { value: 'right', className: 'fa fa-align-right' },
                      { value: 'justify', className: 'fa fa-align-justify' },
                  ],
                }]
              },{
                name: "Decorations",
                open: false,
                buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
              },{
                name: "Other",
                open: false,
                buildProps: ['transition', 'perspective', 'transform'],
              }]
          },
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
