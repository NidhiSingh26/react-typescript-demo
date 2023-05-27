import React from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import UseState from "./components/Hooks/UseState"
import UseEffect from "./components/Hooks/UseEffect"
import UseRef from "./components/Hooks/UseRef"
import Child from './components/Child'
import {MyCustomCountingHook} from './components/Hooks/MyCustomHook'
import {Conditional} from './components/Conditional'
import {useState} from 'react'
import LoginControl from './components/LoginControl';
import Counter from './components/HOC/Counter';
import HOCRed from './components/HOC/HOCRed'
import HOCBlue from './components/HOC/HOCBlue';


const App:React.FC = () => {
  const [showMessage, setShowMessage] = useState<Boolean>(false)
  const [showAlert, setShowAlert] = useState<Boolean>(false)
  const [count1, setCount] = useState<number>(0)

  function getData(data:any){
    console.log(data)
  }
  const{count,incrementCount}=MyCustomCountingHook();

  return (
    <div className="App">
      <div>
        <h2>Higher Order Component</h2>
        <HOCRed cmp = {Counter} />
        <HOCBlue cmp = {Counter} />
        <Counter />
      </div>
      
      <h2>Conditional Rendering</h2>
      <LoginControl />
      <div style={{ padding: '10px' }}>
         <h2> Conditional- Logical && operator </h2>
         <p>
            <button onClick={() => setShowMessage(!showMessage)}>Show Message</button>       
            <button onClick={() => setShowAlert(!showAlert)}> Show Alert </button>
            <button onClick={() => setCount(count1 + 1)}> Increase Count </button>
            <button onClick={() => setCount(count1 - 1)}> Decrease Count </button>
         </p>
         <Conditional showMessage={showMessage} showAlert={showAlert} count1={count1} />
      </div>
      <div>
        <h2>Hooks</h2>
        <UseState />
        <UseEffect />
        <UseRef />
      </div>
      
      <ClassComponent caterogy='Student' />
      <Child getData={getData} />
      <div>
        <h1>Lifting Up state </h1>
        <p>The state is {count}</p>
        <button onClick={()=>incrementCount()}>Increment State</button>
      </div>
    </div>
  );
};

export default App;
