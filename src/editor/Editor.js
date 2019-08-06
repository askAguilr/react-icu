import React,{useState,useEffect} from 'react';
import {Navbar,Nav,Form,FormControl,Button, ButtonGroup} from 'react-bootstrap';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import blocks from './blocks'
import style from './style'
import storage from  './storage'
import {plugins,pluginsOpts} from './plugins'
import CodeEditor from './CodeEditor'
import codeTemplate,{buildTestCode} from './codeTemplate'
import {LiveProvider,LiveEditor,LiveError,LivePreview} from 'react-live'

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
      const rte = editor.RichTextEditor;
      rte.remove('link');
      rte.add('expr', {
        icon: `<input></input>`,
          // Bind the 'result' on 'change' listener
        event: 'change',
        result: (rte,action) => rte.insertHTML(`<a prop="${action.btn.firstChild.value}">${rte.selection()}</a>`),// rte.exec('funny', action.btn.firstChild.value),
        // Callback on any input change (mousedown, keydown, etc..)
        update: (rte, action) => {
          const value = rte.doc.queryCommandValue(action.name);
          if (value != 'false') { // value is a string
            action.btn.firstChild.value = value;
          }
         }
        })

 
  },[]);

  const handleExport = ()=>{
      console.log();
    editor.runCommand('gjs-export-zip');
  }

  const handleNew = ()=>{
    editor.setComponents('');
  }

  const handleCode = (newValue, event)=>{
    console.log("handle code");
    console.log(newValue)
    setCode(newValue);
  }

  const handleTab = (mode) => {
    setMode(mode);
    switch(mode){
      case 'design':
          console.log("Design tab");
          break;
      case 'code':
          console.log("Code tab");
          setCode(codeTemplate);
          break;
      case 'test':
          console.log("Test tab");
          break;
      default:
    }    
  }
  
  console.log(code);
  return (
    <>
      <Navbar id="navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React.ICU</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={handleNew}>New</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
           <ButtonGroup aria-label="View mode">
              <Button onClick={handleTab.bind(this,'design')} variant="outline-light">Design</Button>
              <Button onClick={handleTab.bind(this,'code')}  variant="outline-light">Code</Button>
              <Button onClick={handleTab.bind(this,'test')}  variant="outline-light"><span style={{marginLeft:8,marginRight:8}}>Test</span></Button>
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
          <CodeEditor code={code} onChange={handleCode}/>
      </div>
      <div id="test" style={{display:mode==='test'?'block':'none'}}>
        <LiveProvider code={buildTestCode(''||code.replace('MAGICALLY_GENERATED_JSX', jsxConverter.convert(editor&&editor.getHtml()||'')))} noInline={true}>
          {console.log(buildTestCode(''||code.replace('MAGICALLY_GENERATED_JSX', jsxConverter.convert(editor&&editor.getHtml()||''))))}
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    </>
  );
}

export default Editor;
