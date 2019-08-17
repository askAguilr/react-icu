import exportPlugin from 'grapesjs-plugin-export';
import HTMLtoJSX from 'htmltojsx';

const jsxConverter = new HTMLtoJSX({
    createClass: false,
    outputClassName: 'ReactWeaverComponent'
  });
  

const _plugins = ()=>[exportPlugin];
const _pluginsOpts = ()=>{
    return {
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
    }
}



export const plugins =_plugins(); 
export const pluginsOpts =_pluginsOpts(); 