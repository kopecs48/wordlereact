import React, { useCallback, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import Keys from './Keys';
function Keyboard() {
  const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const keys2 = ["A","S","D","F","G","H","J","K","L"];
  const keys3 = ["Z","X","C","V","B","N","M"];
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter"){
      onEnter();
    } else if (event.key === "Backspace"){
      onDelete();
    } else {
      if ("KeyA" <= event.code && event.code <= "KeyZ"){
        onSelectLetter(event.key.toUpperCase());
      }
    }
  }) 

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, [handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line1'>{keys1.map((key) => {
        return <Keys keyVal = {key} bigKey={false}/>
      })}
      </div>
      
      <div className='line2'>{keys2.map((key) => {
        return <Keys keyVal = {key} bigKey={false}/>
      })}
      </div>

      <div className='line3'>
        <Keys keyVal={"ENTER"} bigKey={true}/>
        {keys3.map((key) => {
        return <Keys keyVal = {key} bigKey={false}/>
      })}
        <Keys keyVal={"DELETE"} bigKey={true}/>
      </div>
    </div>
  )
}

export default Keyboard