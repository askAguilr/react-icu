import React, { useEffect, useState } from "react";
import {useReduxState, useBoundActions} from '../../services/reduxService';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import blocks from './blocks'
import style from './style'
import storage from  './storage'
import {plugins,pluginsOpts} from './plugins'

let editor;


const DesignEditor= props =>{
    const {setHtml}= useBoundActions();
    const tab = useReduxState(state=>state.editorTab);
    const prevTab = useState(tab)

    if(tab!==prevTab && tab!=='design' && editor){
      setHtml(editor.getHtml());
    }

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
              // eslint-disable-next-line 
              if (value != 'false') { // value is a string
                action.btn.firstChild.value = value;
              }
             }
            });
            //console.log(buildTestCode(''||code.replace('MAGICALLY_GENERATED_JSX', jsxConverter.convert(editor&&editor.getHtml()||''))));
      },[]);
  return (
    <>
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
    </>
  );
}

   /* const handleExport = ()=>{
        console.log();
      editor.runCommand('gjs-export-zip');
    }
  
    const handleNew = ()=>{
      editor.setComponents('');
      //setCode(codeTemplate); TODO:REDUX
    }*/

export default DesignEditor;