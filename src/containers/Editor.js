import React from 'react';
import { useBoundActions ,useReduxState} from '../services/reduxService';
import DesignEditor from './DesignEditor/DesignEditor';
import CodeEditor from './CodeEditor/CodeEditor';
import TestingEditor from './TestingEditor/TestingEditor';
import NavBar from '../components/NavBar';
import Selector from '../components/Selector';



function Editor() {
  console.log("Editor render");
  const {setEditorTab} =  useBoundActions();
  const tab = useReduxState(state=>state.editorTab);

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
          <CodeEditor/>
        </Selector>
        <Selector condition={tab==='test'}>
          <TestingEditor/>
        </Selector>
    </>
  );
}

export default Editor;