import { useState } from 'react';
import './style/App.css';
import Inicio from './components/Inicio.jsx';
import About from './components/about.jsx';
import Heading from './components/Heading.jsx';
import IconsInfo from './components/IconsInfo.jsx';
import Contact from './components/Contact.jsx';
import Button from './components/Button.jsx';
import SocialMedia from './components/SocialMedia.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Inicio></Inicio>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <SocialMedia></SocialMedia>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Heading></Heading>
      </div>
      <div>
        <IconsInfo></IconsInfo>
      </div>   
      <div>
        <Contact></Contact>
      </div>  
    </>
  )
}

export default App;
