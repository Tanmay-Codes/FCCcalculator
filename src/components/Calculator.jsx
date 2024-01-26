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
        setInput(prev=> prev.includes("=")? prev.split("=")[1]+"+" : prev+num+"+")
        break;
      case 'subtract':
        setInput(prev=> prev.includes("=")? prev.split("=")[1]+"-" : prev+num+"-")
        break;
      case 'multiply':
        setInput(prev=> prev.includes("=")? prev.split("=")[1]+"*" : prev+num+"*")
        break;
      case 'divide':
        setInput(prev=>prev.includes("=")? prev.split("=")[1]+"/" : prev+num+"/")
        break;
      case 'ac':
        setInput('')
        // console.log(num)
        setNum(0)
        break;
      case 'equals':
        let result = eval(input+num)
        setInput(prev=> prev+num+"="+result)
        console.log(input+num+"="+result)
        setNum(result)
        break;
    
      default:
        break;
    }
    op!=='equals' && op!=='ac' && setNum('')
  }
  return <div className="calculator">
  <div id="display">
    <div className="display__old">{input}</div>
    <div className="display__main">{num}</div>
  </div>
  <div className="keypad">
    <div className="left">
        <div className="row1">
            <button id="clear" className="btn__long" onClick={()=>handleCalculate('ac')} >AC</button>
            <button id="divide" className="btn" ref={btn} onClick={()=>handleCalculate('divide')} >/</button>
            
        </div>
        <div className="row2">
            {keyPad.map(key => <button key={key.id} className="btn" onClick={()=> setNum(prev=> prev==0 ? key.num : prev.toString()+key.num)} id={key.id}>
                {key.num}
            </button>)}
            <button id="zero" className="btn__long" onClick={()=> setNum(prev=>prev=='0' ? '0' : prev+'0')} >0</button>
            <button id="decimal" className="btn" onClick={()=> setNum(prev=>prev.toString().includes(".") ? prev : prev+".")} >.</button>
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
