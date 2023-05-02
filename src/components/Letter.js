import React, {useContext} from 'react';
import { AppContext } from '../App';

function Letter({letterPos, attemptVal}) {
    const { board, word, currAttempt} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = word[letterPos] === letter;
    const almost = !correct && letter !== "" && word.includes(letter);
    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter