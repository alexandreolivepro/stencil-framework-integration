import { MyComponent, defineCustomElements } from 'react-library';
import './App.css'

defineCustomElements();

function App() {

  return (
    <>
      <MyComponent first="Your" last="Name" />
    </>
  )
}

export default App
