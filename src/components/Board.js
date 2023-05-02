import React, { useState } from 'react'
import { boardDefault } from '../Words'
import Letter from './Letter';


function Board() {

  var rows = [];
  for (let i = 0; i < 6; i++){
    let letters = []
    for (let j = 0; j < 5; j++){
      letters.push(<Letter letterPos={j} attemptVal={i}/>);
    }
    rows.push(letters);
  }

  var divRows = rows.map(item => <div className='row'> {item}</div>)

  return (
    <div className="board">
      {divRows}
    </div>
  )
}

export default Board