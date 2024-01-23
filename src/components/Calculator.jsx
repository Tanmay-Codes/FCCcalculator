import { useState } from "react";
import "./calculator.css"
export default function Calculator() {
    const [input, setInput] = useState(0)
  const keyPad = [
    { id: "seven", num: 7 },
    { id: "eight", num: 8 },
    { id: "nine", num: 9 },
    { id: "four", num: 4 },
    { id: "five", num: 5 },
    { id: "six", num: 6 },
    { id: "one", num: 1 },
    { id: "two", num: 2 },
    { id: "three", num: 3 },
  ];
  return <div className="calculator">
  <div id="display">
    <span className="display__old">{input}</span>
    <span className="display__main">{input}</span>
  </div>
  <div className="keypad">
    <div className="left">
        <div className="row1">
            <button id="clear" className="btn__long" onClick={()=>setInput(0)} >AC</button>
            <button id="divide" className="btn" >/</button>
            
        </div>
        <div className="row2">
            {keyPad.map(key => <button className="btn" id={key.id}>
                {key.num}
            </button>)}
            <button id="zero" className="btn__long" >0</button>
            <button id="decimal" className="btn" >.</button>
        </div>
    </div>
    <div className="right">
    <button id="multiply" className="btn" >X</button>
    <button id="subtract" className="btn" >-</button>
    <button id="add" className="btn" >+</button>
    <button id="equals" className="btn__short" >=</button>
    </div>
  </div>
  </div>;
}
