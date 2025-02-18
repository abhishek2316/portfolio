import { useState } from 'react'

import './App.css'


function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    counter ++;
    setCounter(counter)
    if(counter >= 20){
      alert('You have reached count 20!')
    }
  }
  
  

  const removeValue = () => {
    counter --;
    setCounter(counter)
    if(counter <= 0){
      alert('You have reached count 0!')
    }
  }

  return (
    <>
      <h1>Learning Hook</h1>
      <p>Counter Value : { counter } </p>
      <button
      onClick={ addValue } disabled={counter >= 20}>Add Count : { counter }</button>
      <br />
      <button
      onClick={ removeValue } disabled={counter <= 0}>Remove Count : { counter }</button>
    </>
  )
}

export default App
