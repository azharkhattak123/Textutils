import React from 'react'

export default function About(props) {
    
    
    let myStyle = {
        backgroundColor: props.mode === "dark"?"#0f315c":"white",
        color: props.mode === "dark"?"white":"black",
        border: '1px solid',
        borderColor: props.mode === "dark"?"white":"black",
    }
    
  return (
    
    
    <div className="container">
        <h1 className="mb-4" style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" > 
            <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                <strong>Analyze your text</strong>
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Textutils gives you a way to analyze your text quickly and efficiently,Be it word count, character count,remove extra spaces, convert text to upper case and lower case</div>
            </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Textutils is a free character count tool that provides instant character count and word count statistics for a given text.Textutils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.</div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. it suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
            </div>
        </div>
    </div>
</div>
  
  )
}
