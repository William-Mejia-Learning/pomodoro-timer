import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [timer, setTimer] = useState(1500);
  const [selected, setSelected] = useState(1500);
  const intervalRef = useRef(null);


  const countDown = () =>
    intervalRef.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          return 0;
        }
      });
    }, 1000);

    const handleSelected = (time) => {
      setSelected(time)
    }

    const handleReset = (time) => {
      setTimer(time)
      clearInterval(intervalRef.current)
    }


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <div>
        <p>{formatTime(timer)}</p>
      </div>
      <ul>
        <li>
          <button
            onClick={() => {
              handleSelected(900);
              setTimer(900);
              handleReset(900)
            }}
          >
            15 minutes
          </button>
        </li>
        <li>
          <button onClick={() => {
            handleSelected(1800)
            setTimer(1800)
            handleReset(1800)
            }}>30 minutes</button>
        </li>
        <li>
          <button onClick={() => {
            handleSelected(2700)
            setTimer(2700)
            handleReset(2700)
            }}>45 minutes</button>
        </li>
        <li>
          <button onClick={() => {
            handleSelected(3600)
            setTimer(3600)
            handleReset(3600)
            }}>60 minutes</button>
        </li>
      </ul>
      <ul>
        <li>
          <button
            onClick={() => {
              clearInterval(intervalRef.current)
              countDown()
            }}
          >
            Start
          </button>
        </li>
        <li>
          <button onClick={() => clearInterval(intervalRef.current)}>Pause</button>
        </li>
        <li>
          <button onClick={() => handleReset(selected)}>Reset</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
