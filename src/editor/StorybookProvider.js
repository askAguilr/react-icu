import React from 'react';
import { Provider } from '@storybook/ui';
 
export default class MyProvider extends Provider {
  component=null;
  getElements(type) {
    return {};
  }
 
  setComponent(comp){
      this.component=comp;
  }

  renderPreview() {
    return (
      this.component
    );
  }

  getPanels(){
      return {};
  }
 
}