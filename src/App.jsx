import { useState } from 'react';
import './style/App.css';
import Inicio from './components/Inicio.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Inicio></Inicio>
      </div>
        
    </>
  )
}

export default App
