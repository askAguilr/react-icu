const blocks = ()=>{
    return [
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
        },
        {
          id: 'div',
          label: '<b>Div</b>',
          content: `<div style="
          background: #fff;
          border-radius: 2px;
          display: inline-block;
          height: 300px;
          position: relative;
          padding:1rem;
          width: 100%;"
          data-gjs-type="div"></div>`,
        },
        {
          id: 'card',
          label: '<b>Card</b>',
        content: `<div 
            style="
            background: #fff;
            border-radius: 2px;
            display: inline-block;
            height: 300px;
            margin: 1rem;
            position: relative;
            padding:1rem;
            width: 300px;
            box-shadow: 0 10px 20px 0 rgba(0,0,0,0.19), 0 6px 6px 0 rgba(0,0,0,0.23);

            " data-gjs-type="div"></div>`,
        },
        {
          id: 'button',
          label: '<b>Button</b>',
          content: `<button class="pure-material-button-contained"style="
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            border: none;
            border-radius: 4px;
            padding: 0 16px;
            min-width: 64px;
            height: 36px;
            vertical-align: middle;
            text-align: center;
            text-overflow: ellipsis;
            text-transform: uppercase;
            color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
            background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            font-size: 14px;
            font-weight: 500;
            line-height: 36px;
            overflow: hidden;
            outline: none;
            cursor: pointer;
            transition: box-shadow 0.2s;
          ">Button</button>`,
        },
        {
          id: 'switch',
          label: '<b>Switch</b>',
        content: `
        <button type="button" class="btn btn-primary">Primary</button>`,
        },
        {
          id:'bootstrap-md',
          label:'Material UI Theme',
          content: '<link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">'
        },
        {
          id:'bootstrap',
          label:'Bootstrap',
          content:'<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'
        },
        {
          tagName: 'div',
          draggable: false,
          attributes: { 'some-attribute': 'some-value' },
          components: [
            {
              tagName: 'span',
              content: '<b>Some static content</b>',
            }, {
              tagName: 'div',
              // use `content` for static strings, `components` string will be parsed
              // and transformed in Components
              components: '<span>HTML at some point</span>',
            }      
          ]
        }

      ]
}

export default blocks();