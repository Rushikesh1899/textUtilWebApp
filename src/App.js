import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Profile from './components/Profile';
// import Forms from './components/Forms';

import {BrowserRouter,Routes,Route,} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light') //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
    
  }

  return (
    <> 
      <div>
      <BrowserRouter>
      <Navbar title="Rushizz" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 
        <div className='container my-3'>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter Text Below Here" mode={mode}></TextForm>}>
          </Route>  
          <Route path="/about" element={<About />}/>
        </Routes>
        </div>
    </BrowserRouter>
      </div>
      {/* <Profile /> */}
      {/* <div className='container'>
        <Forms />
      </div> */}
      
    </>
  );
}

export default App;
