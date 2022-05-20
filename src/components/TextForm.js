import React, { useState } from "react"


export default function TextForm(props) {
    const [txt, settxt] = useState("");

    const handleUpClick = ()=>{
        let upptxt = txt.toUpperCase();
        settxt(upptxt)
    }
    const handleOnChange= (event)=>{
        settxt(event.target.value)
    }
    const handleDownClick = ()=>{
        let dwntxt =  txt.toLowerCase();
        settxt(dwntxt)
    }
    const handleReverse = ()=>{
        const nm= document.querySelector("#enc")
        nm.innerHTML === "Encrypt String" ? nm.innerHTML="Decrypt String" :nm.innerHTML="Encrypt String"
        let temp=[]
        let text;
        for(let i of txt){
            temp.unshift(i)
        }
        text = temp.join('');
        settxt(text)
    }
  return (
      <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={txt} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert To Lowercase</button>
            <button id="enc"className="btn btn-primary mx-3" onClick={handleReverse}>Encrypt String</button>
        </div>     
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text summary</h1>
            <p>{txt.split(" ").length} words and {txt.length} character</p> 
            <p>{0.008*txt.split(" ").length}Minutes read</p>   
            <h3>Preview</h3>
            <p>{txt.length>0?txt:"Enter Somthing into textbox above to priview"}</p>
        </div> 
      </>
  )
}