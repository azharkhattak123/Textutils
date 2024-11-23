import React, {useState} from 'react'
import './TextForm.css';
export default function TextForm(props) {

    const handleChangeUc = () => {
      let newText = text.toUpperCase();
      setText(newText);
      if(text.length !== 0){
        props.showAlert("Converted to upper case","success");
      }
      else{
        props.showAlert("Please Enter some text","warning");
      }
    }

    const handleChangelc = () => {
      let newText = text.toLowerCase();
      setText(newText);
      if(text.length !== 0){
        props.showAlert("Converted to Lower case","success");
      }
      else{
        props.showAlert("Please Enter some text","warning");
      }
    }
    
    const handleClear = () => {
      let newText = "";
      setText(newText);
      if(text.length !== 0){
        props.showAlert("Text Cleared","success");
      }
      else{
        props.showAlert("Please Enter some text","warning");
      }
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      if(text.length !== 0){
        props.showAlert("Text copied to clipboard","success");
      }
      else{
        props.showAlert("Please Enter some text","warning");
      }
    }

    const handleRemoveES = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      if(text.length !== 0){
        props.showAlert("Extra spaces has been removed","success");
      }
      else{
        props.showAlert("There is no extra spaces in your text","warning");
      }
    }

    const handleSpeak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      if(text.length !== 0){
        props.showAlert("Speaking...","success");
      }
      else{
        props.showAlert("There is no text to speak","warning");
      }
    }

    const handleChange = (event) => {
      setText(event.target.value);
    }
    
    const [text,setText] = useState("");
    
      let word = text.split(/\s+/);
      let wordText = word.filter((txt) =>  txt !== "");
    
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{ props.heading }</h1>
        <div className="mb-3 mt-4">
         <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#362e5a':'white',color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" onChange={handleChange} rows="7"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleChangeUc}>Convert to upper case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleChangelc}>Convert to lower case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleRemoveES}>Remove extra spaces</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleSpeak}>Speak</button>
    </div>
    <div className="container mt-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your textutils summary</h2>
      <p>
        <span className="charWords">{wordText.length} </span> Words and <span className="charWords">{text.length}</span> Characters
      </p>
      <p>
        <span className="charWords">{0.008 * wordText.length}</span> Minutes to read
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>

    </>
  )
}
