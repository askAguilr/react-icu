const  style ={
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
        name: "Appearance",
        open: false,
        buildProps: ['border-radius-c', 'border-radius', 'border', 'box-shadow', 'background','background-color','cursor'],
      },{
        name: "Other",
        open: false,
        buildProps: ['transition', 'perspective', 'transform'],
      }]
  }

  export default style;