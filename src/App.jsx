import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Link to={"/test"}>To test page</Link>
      <br />
      <a href="/test">A Href to Test</a>
    
    </>
  )
}

export default App;