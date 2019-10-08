import React,{useEffect} from 'react';
import {useBoundActions,useReduxState} from '../modules/react-redux-thunk-easy';
import DesignEditor from './DesignEditor/DesignEditor';
import CodeEditor from './CodeEditor/CodeEditor';
import TestingEditor from './TestingEditor/TestingEditor';
import NavBar from '../components/NavBar';
import Selector from '../components/Selector';
import {emptyTemplate} from '../services/templateService';
import * as actions from '../store/actions'


function Editor() {
  console.log("Editor render");
  const {setEditorTab,newComponent,loadCode, saveCode} =  useBoundActions(actions);
  const {build}=useBoundActions(actions);
  const tab = useReduxState(state=>state.editorTab);

  const autoSave = () => {
    saveCode();
    saveCode();
    saveCode();
    saveCode();
  }

  useEffect(()=>{
    loadCode();
    setInterval(autoSave,5000);
  },[autoSave,loadCode]);

  const handleTab = (mode) => {
    console.log(mode)
    setEditorTab(mode);
    switch(mode){
      case 'design':
          break;
      case 'code':
          break;
      case 'test':
          build();
          break;
      default:
    }    
  }

  const handleAction = (action, values) => {
    switch(action){
      case 'new':
        newComponent(emptyTemplate);
        break;
      default:
    }
  }

  return (
    <>
       <NavBar onAction={handleAction} onTabChange={handleTab}/>
        <Selector condition={tab==='design'}>
          <DesignEditor/>
        </Selector>
        <Selector condition={tab==='code'}>
          <CodeEditor/>
        </Selector>
        <Selector condition={tab==='test'}>
          <TestingEditor/>
        </Selector>
    </>
  );
}

export default Editor;