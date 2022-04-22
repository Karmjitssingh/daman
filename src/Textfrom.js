import React, { useState } from 'react'

 function Textfrom(props) {
     const [text, setText]=useState("Enter the text area");
     const handledclick=()=>{
    console.log("change upeer case"+text);
    let newtext=text.toUpperCase();
    setText(newtext);

     }
     const handledclickon=()=>{
         console.log("lower case");
         let newtext1=text.toLowerCase();
         setText(newtext1);


     }
const handledonChange =(event)=>{

    console.log("onchange");
    setText(event.target.value);
}

  return (
    <>
    <div>
    <h1>{props.handing}</h1>
    <div className="mb-3"></div>
      <textarea className="form-control" value={text} onChange={handledonChange} id="mybox" row="8"></textarea>
   <button className='btn btn.primary mx-1'onClick={handledclick}>convert to upper case</button>
   <button className='btn btn.danger mx-1'onClick={handledclickon}>convert to lower case</button>
    </div>
    <div className='container my-3'>
      <h1>your text sumamry</h1>
      <p> {text.trimStart().length } word and {text.length} Chracter</p>
      <p>{0.008*text.trimEnd().length} Minutes Read</p>
      <h1>Preview</h1>
      <p> {text}</p>
    </div>
</>

  )
}
export default Textfrom