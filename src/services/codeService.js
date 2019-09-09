import HTMLtoJSX from 'htmltojsx';

const jsxConverter = new HTMLtoJSX({
  createClass: false,
  outputClassName: 'ReactWeaverComponent'
});

export const buildJSX = html =>{
  return jsxConverter.convert(html);
}

export const injectJSX = (code,jsx)=>{
  return code.replace('MAGICALLY_GENERATED_JSX',jsx);
}

export const buildTestCode = (code,html,css) =>{
  console.log(html)
  console.log(code)
  const jsx=buildJSX('<style>'+css
  +'</style>'+html);
  console.log(jsx);
  return `
  ${injectJSX(code,jsx)}
  
    render(
      <MyComponent />
    )`;
}
