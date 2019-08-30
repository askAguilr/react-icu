import HTMLtoJSX from 'htmltojsx';

const jsxConverter = new HTMLtoJSX({
  createClass: false,
  outputClassName: 'ReactWeaverComponent'
});


export const buildTestCode = (code) =>{
  return `
  ${code}
  
    render(
      <MyComponent />
    )`;
}






  

export default jsxTemplate;