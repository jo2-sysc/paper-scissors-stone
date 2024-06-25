import { useState, useEffect } from 'react'; // Hook
import './App.css';
import ScoreBoard from './ScoreBoard';

function App() {
  // player's choice 
  // computer's choice
  const [ player, setPlayer ] = useState(''); // initial state
  const [ computer, setComputer ] = useState('');
  const [ result, setResult ] = useState({
    player: 0, 
    computer: 0, 
    draw: 0
  });

  useEffect(() => {
    // side effect => parallel execution regardless of lifecycle
    // execute on certain condition [2nd arguments of useEffect]
    checkWinner();
  }, [player, computer]); 

  function computerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      setComputer('paper') 
      return 'paper'
    }
    if (choice === 1) {
      setComputer('scissor')
      return 'scissor';
    }
    if (choice === 2) {
      setComputer('stone')
      return 'stone';
    }
  }

  function checkWinner() {
    if(player && computer) { 
        if(player === computer) {
          // result = {player: 0, computer: 0, draw: 0}
          setResult(prevState => {
            return {...prevState, draw: prevState.draw + 1}
          })
          return '打和！全部打和！';
        } else if (
          (player === 'stone' && computer === 'scissor') ||
          (player === 'scissor' && computer === 'paper') ||
          (player === 'paper' && computer === 'stone')
        ) {
          setResult(prevState => {
            return {...prevState, player: prevState.player + 1}
          })
          return 'YOU Win 😎';
        } else {
          setResult(prevState => {
            return {...prevState, computer: prevState.computer + 1}
          })
          return 'YOU Lose 🐷';
        }        
    } else {
      return '';
    }
  }

  function btnOnClick (value) {
    setPlayer(value);
    computerChoice();
  }

  //let winnerMessage = checkWinner();
  //console.log(result);
  return (
    <div className="App">
        <h1 style={{
          fontSize: '48px',
          textAlign: 'center'
        }}>-------🖐🏼🤞🏻👊🏼-------</h1>
        <div> 
          <button onClick={() => btnOnClick('paper')}>🖐🏼</button>
          <button onClick={() => btnOnClick('scissor')}>🤞🏻</button>
          <button onClick={() => btnOnClick('stone')}>👊🏼</button>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-around'
        }}>
          <div style={{fontSize: '96px'}}>
              <h2 style={{fontSize: '36px'}}>YOU 🫵🏼</h2>
              {/* player === 'paper' ? 
                '🖐🏼' : 
                player === 'stone' ? 
                '👊🏼' : 
                player === 'scissor' ? 
                '🤞🏻': '' */}
                { player === 'paper' && '🖐🏼' /* if => then */}
                { player === 'stone' && '👊🏼'}
                { player === 'scissor' && '🤞🏻'}
          </div>
          <div style={{fontSize: '96px'}}>
            <h2 style={{fontSize: '36px'}}>Computer 💻</h2>
                { computer === 'paper' && '🖐🏼'}
                { computer === 'stone' && '👊🏼'}
                { computer === 'scissor' && '🤞🏻'}
          </div>
        </div>
        <div style={{textAlign: 'center', fontSize: '24px'}}>
            {/*(player && computer) && (
                player === computer ? '打和！全部打和！':
                  ((player === 'stone' && computer === 'scissor') ||
                  (player === 'scissor' && computer === 'paper') ||
                  (player === 'paper' && computer === 'stone')) ? 
                  'YOU Win 😎':
                  'YOU Lose 🐷'
              )
            */}
            {/*winnerMessage*/}
            <ScoreBoard 
              scores={result} 
              x={'x me'}
            />
        </div>
    </div>
  );
}

export default App;
