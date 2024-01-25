import { useRef, useState } from "react";
import "./calculator.css"
export default function Calculator() {
  const btn = useRef()
    const [input, setInput] = useState('')
    const [num, setNum] = useState(0)
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
  // console.log(eval('3 +5 * 6 - 2 / 4'))
  const handleCalculate = (op)=>{
    console.log(op)
    switch (op) {
      case 'add':
        setInput(prev=> prev+num+"+")
        break;
      case 'subtract':
        setInput(prev=> prev+num+"-")
        break;
      case 'multiply':
        setInput(prev=> prev+num+"*")
        break;
      case 'divide':
        setInput(prev=> prev+num+"/")
        break;
      case 'ac':
        setInput('')
        // console.log(num)
        setNum(0)
        break;
      case 'equals':
        setInput(prev=> prev+num)
        console.log(input+num)
        setNum(eval(input+num))
        break;
    
      default:
        break;
    }
    op!=='equals' && op!=='ac' && setNum('')
  }
  return <div className="calculator">
  <div id="display">
    <span className="display__old">{input}</span>
    <span className="display__main">{num}</span>
  </div>
  <div className="keypad">
    <div className="left">
        <div className="row1">
            <button id="clear" className="btn__long" onClick={()=>handleCalculate('ac')} >AC</button>
            <button id="divide" className="btn" ref={btn} onClick={()=>handleCalculate('divide')} >/</button>
            
        </div>
        <div className="row2">
            {keyPad.map(key => <button key={key.id} className="btn" onClick={()=> setNum(prev=> typeof prev !== 'string' && prev+key.num)} id={key.id}>
                {key.num}
            </button>)}
            <button id="zero" className="btn__long" onClick={()=> setNum(prev=>prev+'0')} >0</button>
            <button id="decimal" className="btn" onClick={()=> setNum(prev=>prev+".")} >.</button>
        </div>
    </div>
    <div className="right">
    <button id="multiply" className="btn" onClick={()=>handleCalculate('multiply')} >X</button>
    <button id="subtract" className="btn"  onClick={()=>handleCalculate('subtract')} >-</button>
    <button id="add" className="btn" onClick={()=>handleCalculate('add')} >+</button>
    <button id="equals" className="btn__short"  onClick={()=>handleCalculate('equals')} >=</button>
    </div>
  </div>
  </div>;
}
