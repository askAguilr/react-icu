import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import grapesjs from 'grapesjs';
import './App.css';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';

function App() {
  useEffect(()=>{
    var editor = grapesjs.init({
      classes: ['gjs-dashed'],
      height: '100%',
      showOffsets: 1,
      noticeOnUnload: 0,
      avoidInlineStyle: 1,
      storageManager: { autoload: 0 },
      container: '#gjs',
      fromElement: true,
      styleManager: {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom','z-index']
          },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
            properties: [{
              id: 'flex-width',
              type: 'integer',
              name: 'Width',
              units: ['px', '%'],
              property: 'flex-basis',
              toRequire: 1,
            }]
        }]
      },

      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          /*navbarOpts:{
            blocks: []
          },
          countdownOpts:{
            blocks: []
          },
          formsOpts:{
            blocks: []
          }*/
        }
      },

      assetManager: {
        assets: [
         'http://placehold.it/350x250/78c5d6/fff/image1.jpg',
         // Pass an object with your properties
         {
           type: 'image',
           src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
           height: 350,
           width: 250
         },
         {
           // As the 'image' is the base type of assets, omitting it will
           // be set as `image` by default
           src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
           height: 350,
           width: 250
         },
        ],
      }
    });

    var comps = editor.DomComponents;

// Get the model and the view from the default Component type
var defaultType = comps.getType('default');
var defaultModel = defaultType.model;
var defaultView = defaultType.view;

var inputTypes = [
  {value: 'text', name: 'Text'},
  {value: 'email', name: 'Email'},
  {value: 'password', name: 'Password'},
  {value: 'number', name: 'Number'},
];

    const html = ReactDOMServer.renderToString( <LiveProvider code="<strong>Hello World!</strong>">
    <div id="gjs">
    </div>
    <LiveEditor />
    <LiveError />
    <LivePreview/>
    
  </LiveProvider>);
    console.log(html);
    editor.BlockManager.add('ReactOuter', {type:'ReactOuter',content:'<div class="ReactOuter"><div class="React">REacticiño<input id="asd"></input></div></div>' });


    comps.addType('ReactOuter', {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          // Traits (Settings)
          traits: ['Component', 'placeholder', {
              // Change the type of the input (text, password, email, etc.)
              type: 'select',
              label: 'Type',
              name: 'type',
              options: inputTypes,
            },{
              // Can make it required for the form
              type: 'checkbox',
              label: 'Required',
              name: 'required',
          }],
        }),
      },
      {
        isComponent: function(el) {
          if(el.className === 'ReactOuter'){
            console.log("match react");
            return {type: 'ReactOuter'};
          }
        },
      }),
    
      // Define the View
      view: defaultType.view,
    });

    comps.addType('React', {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          // Can be dropped only inside `form` elements
         // draggable: 'form, form *',
          // Can't drop other elements inside it
          propagate:['layerable','toolbar','editable'],
          droppable: false,
          layerable:false,
          editable:false,
          toolbar:[],
          // Traits (Settings)
          traits: ['Component', 'placeholder', {
              // Change the type of the input (text, password, email, etc.)
              type: 'select',
              label: 'Type',
              name: 'type',
              options: inputTypes,
            },{
              // Can make it required for the form
              type: 'checkbox',
              label: 'Required',
              name: 'required',
          }],
        }),
      },
      // The second argument of .extend are static methods and we'll put inside our
      // isComponent() method. As you're putting a new Component type on top of the stack,
      // not declaring isComponent() might probably break stuff, especially if you extend
      // the default one.
      {
        isComponent: function(el) {
          if(el.className === 'React'){
            console.log("match react");
            return {type: 'React'};
          }
        },
      }),
    
      // Define the View
      view: defaultType.view,
    });

    editor.BlockManager.add('my-react', {
      label: 'Simple react',
      content: {
        type: 'React', // Built-in 'map' component
      }
    })
    
  });

 

  return (
    <div className="App">
    <div id="gjs">
        </div>
      
    </div>
  );
}

export default App;
