import React, { useState } from 'react'
import{useSpeechSynthesis} from 'react-speech-kit'


export default function Textform(props) {

  const handlechange = () => {
    console.log("uppercase are just Click me " + text);
    let convert_To_uppercase = text.toUpperCase();
    setText(convert_To_uppercase);
  
  }

  const handllowechange = () => {
    console.log("uppercase are just Click me " + text);
    let convert_To_lower = text.toLowerCase();
    setText(convert_To_lower);
    // props.showAlert('Dark mode has been enabled' , 'success');
  }

  const removeText=()=>{
    let alltext = " ";
    setText(alltext);

  }
 const {speak} = useSpeechSynthesis();
  const handleonClick =()=>{
   speak({text:text})

  }
  const stopSpeech=()=>{
   const synth = window.speechSynthesis;
   const utterance1 = new SpeechSynthesisUtterance();
   synth.speak(utterance1);
   synth.cancel();

  }
 

  const handleCopy=()=>{ 

    const copyText = document.querySelector("#mybox");
    copyText.select();
  navigator.clipboard.writeText(copyText.value)
  }


  const removeSpaces=()=>{
  let textfile = text.split("  ").join("");
  setText(textfile)
  
}

  const onchangeEvent = (event) => {
    console.log("onchange");
    let string = event.target.value;
    setText(string);
  }

  const [text, setText] = useState(""); 

  //for using style the button  and adding hover 
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };
   


  return (
    <div>

      <h1 style={{ marginLeft:"90px"}}>{props.heading}</h1>
      <div className="form-floating "  style={{ height: "190vh",   marginLeft:"90px" }}  >

        <textarea className="form-control" placeholder="Leave a comment here" style={{ height: "200px", width: "80vw",backgroundColor:" lightgrey"  }} value={text} id="mybox" onChange={onchangeEvent} />



        <button className="btn  btn-primary mx-2" style={{ marginTop: "10px" ,backgroundColor:"black" , color:isHover?'green':'white' }}  onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}  onClick={handlechange}>Convert to UpperCase </button> 
       

        <button className="btn btn-primary" style={{ marginTop: "13px", backgroundColor:"black" , }} onClick={handllowechange}>Convert to LowerCase</button>

        <button className="btn btn-primary mx-2" style={{ marginTop: "13px",backgroundColor:"black"  , color:"white" }} onClick={removeText}>clear Text</button> 

        <button className='btn btn-primary mx-2'style={{ marginTop: "13px",backgroundColor:"black"  , color:"white" }} onClick={handleonClick}>Listen</button>

        <button className='btn btn-primary mx-2'style={{ marginTop: "13px",backgroundColor:"black"  , color:"white" }} onClick={stopSpeech}>Stop Listen</button>

        <button className='btn btn-primary mx-2' style={{ marginTop: "13px",backgroundColor:"black", color:"white" }}  onClick={handleCopy} >CopyText</button>

        <button className='btn btn-primary mx-2' style={{ marginTop: "13px",backgroundColor:"black", color:"white" }}  onClick={removeSpaces} >RemoveSpaces</button>

        <div className="container my-2" >
          <h1>your text summary</h1>

          <p>  <b>   {text.split(" ").length} word and {text.split("").length} character  </b>   </p>
          <div className="container my-2" >

            <p><b>Time To take Read :{0.008 * text.split(" ").length}min</b>  </p>
          </div>
          <h1>preview</h1>
          <p style={{color:"green"}}>{text.length>0? text:'Enter on texTbox'}</p>

        </div>
      </div>


    </div>
  );
}
