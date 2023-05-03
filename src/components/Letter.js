import React, {useContext, useEffect} from 'react';
import { AppContext } from '../App';

function Letter({letterPos, attemptVal}) {
    const { board, word, currAttempt, setDisabledLetterrs} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = word[letterPos] === letter;
    const almost = !correct && letter !== "" && word.includes(letter);
    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
      if (letter !== "" && !correct && !almost) {
        setDisabledLetterrs((prev) => [...prev, letter]);
      }
    }, [currAttempt.attempt]);
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter