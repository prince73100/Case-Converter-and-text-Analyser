import React, { useState } from 'react'
export default function Textform(props) {
  const handleonupclick=()=>{
    let uper = text.toUpperCase();
    settext(uper);
    props.showAlert("Upper Case is Success","success");
  }
  const handleonchange=(event)=>{
    console.log("function is fired" + text);
    settext(event.target.value);
  }
  const handleonlowclick=()=>{
    let lower = text.toLowerCase();
    settext(lower);
    props.showAlert("Lower Case is Success","success");
  }
  const handleClearClick=()=>{
    let lower = " ";
    settext(lower);
    props.showAlert("Clear Text","success");
  }
  const handleCopyClick=()=>{
    let remove  =document.getElementById("myBox");
    remove.select();
    navigator.clipboard.writeText(remove.value);
  }
  const[text,settext] = useState('')
  return (
    <>
    <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.text}</h1>
         <div className="mb-3 ">
            <label htmlFor="myBox" className="form-label"></label>
             <textarea className="form-control" onChange={handleonchange} style={{background:props.mode==='dark'?'#030629':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8  "></textarea>
         </div>
         <button  disabled ={text.length===0}className='btn btn-primary' onClick={handleonupclick}>Convert to UpperCase</button>
         <button disabled ={text.length===0}className='btn btn-primary mx-2' onClick={handleonlowclick}>Convert to LowerCase</button>
         <button disabled ={text.length===0}className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
         <button disabled ={text.length===0}className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>



    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} Word and {text.length} character</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing preview"}</p>
    </div>
    </>
  )
}
