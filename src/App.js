import React, {useState} from 'react'

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 2000);
}

const toggleMode = () => {
 
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#120435';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
 
}

const router = createBrowserRouter([
    {
      path: "/",
      element:<>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
                <Alert alert={alert}/>
                <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
                
              </>
      
    },
    {
      path: "/about",
      element: <>
                  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
                  <Alert alert={alert}/>
                  <About mode={mode}/>
                
                </> 
    },
]);  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
