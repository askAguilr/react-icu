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

export const loadCodeStorage = ()=>{
  const code = localStorage.getItem('code');
  if(code!==null){
    return code;
  }else{
    return '';
  }
}

export const saveCodeStorage = code => {
  localStorage.setItem('code',code);
}
