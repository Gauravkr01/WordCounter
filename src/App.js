// import logo from './logo.svg';


import { useState } from 'react';
import Navbar from  './components/Navbar';
import Textform from './components/Textform';
import Alertmessage from "./components/Alertmessage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'; 




function App() {


  const[mode  , setmode] = useState('light');
  const[alert  , setAlert] = useState(null);


 const showAlert = (message  , type )=>{
    setAlert({
      message: message, 
      type: type
    })

   setTimeout(()=>{
       setAlert(null);
   },2000)

 }
  const toggleMode=()=>{
    if(mode==='light')
    {setmode('grey'); 
    document.body.style.backgroundColor = 'grey';
    document.body.style.color = 'black';
    showAlert('Dark mode has been enabled' , 'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('light mode has been enabled' , 'success');
    }

  }
  return ( 
<>


  

<div className="container">
  {
   <Textform heading= "write something ?" /> 
    // <About />   
  }

</div>


{/* 
<BrowserRouter>

 <Navbar title="Home" aboutText ="Story"  mode={mode} toggleMode= {toggleMode}/>
<Alertmessage alert={alert}/>

      <Routes>
        <Route path="/" element={ <Textform heading= "write something on Text ?" /> } />
        <Route path="/About" element={<About />}>
         
         
        </Route>
      </Routes>
    </BrowserRouter> */}


</> 
    
  );
}

export default App;
