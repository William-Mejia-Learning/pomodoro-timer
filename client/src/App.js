import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [timer, setTimer] = useState('')
  
  let timeLeft = timer

  const countDown = setInterval(() => {
    timeLeft -= 1
    setTimer(timeLeft)
    // console.log(timeLeft)
  }, 1000)
  
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <ul>
        <li><button>15 minutes</button></li>
        <li><button>30 minutes</button></li>
        <li><button>45 minutes</button></li>
        <li><button>60 minutes</button></li>
      </ul>

      <div>
        {/* {timer} */}
      </div>


    </div>
  );
}

export default App;
