// import { a } from "react-router-dom";


export default function Navbar(props) { 





  return (


    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } style= {{ marginBottom:"50px"}} >

    <div className="container-fluid " > 

      <a className="navbar-brand" href="#">{this}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="#">{props.title}</a>
             </li>
            <li className="nav-item">
            <a className="nav-a" href="#">{props.aboutText}</a>
             </li>
        </ul>
      </div>

  <div className={`form-check form-switch text-${props.mode==='light'?'grey':'light'}`}>
     <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
  </div>


    </div>
  </nav>  
    
  )
}
