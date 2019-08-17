const jsxTemplate = 
`

const MyComponent = props => {
//TODO: Write render computations here, such as:
//const {userName} = props;
//const myVar = 'Hello ' + userName;

return (MAGICALLY_GENERATED_JSX); 
}
`

export const buildTestCode = (code) =>
`
${code}

  render(
    <MyComponent />
  )`

export default jsxTemplate;