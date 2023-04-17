import './App.css'
import React, { useState} from "react";

function App() {
  
  const [timer, setTimer] = useState(0); // 25 minutes in seconds

  const countDown = () => setInterval(() => {
    setTimer((prevTime) => {
      if(prevTime > 0) {
        return prevTime - 1
      } else {
        return 'Expired'
      }
    })
  }, 1000)
  
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <ul>
        <li><button onClick={(event) => {
          setTimer(5);
          // console.log(event)
          }}>15 minutes</button></li>
        <li><button onClick={() =>setTimer(10)}>30 minutes</button></li>
        <li><button onClick={() => setTimer(20)}>45 minutes</button></li>
        <li><button onClick={() => setTimer(25)}>60 minutes</button></li>
      </ul>
      <ul>
        <li><button onClick={countDown}>Start</button></li>
      </ul>

      <div>
        <p>{timer}</p> 
      </div>


    </div>
  );
}

export default App;
