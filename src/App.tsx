import { useEffect, useState } from 'react';
import './App.css';
import { HangImage } from './components/HangImage';
import { getRandomWord } from './helpers/getRandomWord';
import { letters } from './helpers/letters';

function App() {

  const [word, setWord] = useState(getRandomWord);
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose,setLose] = useState(false);
  const [win,setWin] = useState(false);

 
  
  useEffect(() => {
    if(attempts >= 9){
      setLose(true);
    }

  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if(currentHiddenWord === word && attempts < 9){
      setWin(true);
    }
  }, [hiddenWord])
  
  


  const checkLetter = (letter:string) =>{

    if(lose || win){
      return;
    }

    if(hiddenWord.includes(letter)){
      return;
    }

    if(!word.includes(letter)){
      setAttempts(Math.min(attempts + 1, 9))
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for(let i = 0; i<word.length; i++){
      if(hiddenWordArray[i] === letter){
        return;
      }
      if(word[i] === letter){
        hiddenWordArray[i] = letter;
      }
      setHiddenWord(hiddenWordArray.join(' '));

    }
    // setAttempts(Math.min(attempts + 1, 9));
  }

  const newGame = () =>{
    const newWord = getRandomWord();

    setWord(newWord)
    setHiddenWord('_ '.repeat(newWord.length))
    setAttempts(0)
    setLose(false)
    setWin(false)
  }

  return(
    <div className='App'>
      
      <HangImage imageNumber = {attempts}/>

      <h3>{hiddenWord}</h3>
    {
      letters.map((letter)=>{
        return (
          <button 
          onClick={()=>checkLetter(letter)}
          key={letter}
          >
            {letter}
          </button>
        )
      })
    }
      <h3>Intentos: {attempts}</h3>

      {
        (lose) 
        ? <h2>Perdio - {`Respuesta: ${word}`}</h2>
        : ''
      }

      {
        (win) 
        ? <h2>Ganaste!!</h2>
        : ''
      }

      <button
        onClick={newGame}
      >
        Reiniciar Juego
      </button>

      
    </div>
  )
};

export default App;
