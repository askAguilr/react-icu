import React from 'react';
import * as actions from '../store/actions';
import {useReduxState,useBindActionCreators} from '../modules/reduxHumanHooks';
import DesignEditor from './DesignEditor/DesignEditor';
import CodeEditor from './CodeEditor/CodeEditor';
import TestingEditor from './TestingEditor/TestingEditor';
import NavBar from '../components/NavBar';
import Selector from '../components/Selector';


function Editor() {
  console.log("Editor render");
  const tab = useReduxState(state=>state.editorTab);
  console.log(tab);
  const {setEditorTab,setCode} =  useBindActionCreators(actions);
  
  const handleCode = (newValue)=>{
    setCode(newValue);
  }

  const handleTab = (mode) => {
    console.log(mode)
    setEditorTab(mode);
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

  const handleAction = (action, values) => {
    
  }

  return (
    <>
       <NavBar onAction={handleAction} onTabChange={handleTab}/>
        <Selector condition={tab==='design'}>
          <DesignEditor/>
        </Selector>
        <Selector condition={tab==='code'}>
          <CodeEditor onChange={handleCode}/>
        </Selector>
        <Selector condition={tab==='test'}>
          <TestingEditor/>
        </Selector>
    </>
  );
}

export default Editor;