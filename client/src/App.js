import "./App.css"
import React, { useState, useRef, useEffect } from "react"

function App() {
  const [timer, setTimer] = useState(1500)
  const [selected, setSelected] = useState(1500)
  const [running, setRunning] = useState(false)
  const [mode, setMode] = useState("work")
  const [night, setNight] = useState("dark")
  const intervalRef = useRef(null)

  const countDown = () =>
    (intervalRef.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1
        } else {
          play()
          if (mode === "work") {
            handleRunning(false)
            handleMode("break")
            setTimer(600)
          } else {
            handleRunning(false)
            handleMode("work")
            setTimer(selected)
          }
        }
      })
    }, 1000))

  const handleNight = () => {
    if (night === "light") {
      setNight("dark")
    } else {
      setNight("light")
    }
  }

  const play = () => {
    const audio = new Audio("./mixkit-arcade-retro-game-over-213.wav")
    audio.play()
  }

  const handleSelected = (time) => {
    setSelected(time)
  }

  const handleReset = (time) => {
    setTimer(time)
    clearInterval(intervalRef.current)
  }

  const handleMode = (modes) => {
    setMode(modes)
    clearInterval(intervalRef.current)
  }

  const handleRunning = (run) => {
    setRunning(run)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`
  }

  useEffect(() => {
    document.body.className = night
  })


  return (
    <div className={`App`}>
      <h1>Pomodoro Timer</h1>
      <div>
        <h2>{mode.toUpperCase()}</h2>
        <p className="timer">{formatTime(timer)}</p>
      </div>
      <ul>
      <li>
            <button
              onClick={() => {
                handleRunning(false)
                handleSelected(300)
                setTimer(300)
                handleReset(300)
              }}
            >
              5 minutes
            </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleRunning(false)
              handleSelected(600)
              setTimer(600)
              handleReset(600)
            }}
          >
            10 minutes
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleRunning(false)
              handleSelected(900);
              setTimer(900);
              handleReset(900);
            }}
          >
            15 minutes
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleRunning(false)
              handleSelected(1800)
              setTimer(1800)
              handleReset(1800)
            }}
          >
            30 minutes
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleRunning(false)
              handleSelected(2700)
              setTimer(2700)
              handleReset(2700)
            }}
          >
            45 minutes
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleRunning(false)
              handleSelected(3600)
              setTimer(3600)
              handleReset(3600)
            }}
          >
            60 minutes
          </button>
        </li>
      </ul>
      <ul>
        {(() => {
          if (running) {
            return (
              <li>
                <button
                  className="pause"
                  onClick={() => {
                    handleRunning(false)
                    clearInterval(intervalRef.current)
                  }}
                >
                  Pause
                </button>
              </li>
            );
          } else {
            return (
              <li>
                <button
                  onClick={() => {
                    handleRunning(true)
                    clearInterval(intervalRef.current)
                    countDown()
                    
                  }}
                >
                  Start
                </button>
              </li>
            );
          }
        })()}
        <li>
          <button className="reset" onClick={() => handleReset(selected)}>
            Reset
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (mode === "work") {
                handleRunning(false)
                handleMode("break")
              } else {
                handleRunning(false)
                handleMode("work")
              }
            }}
          >
            Mode
          </button>
        </li>
        <li>
          <button onClick={handleNight}>Toggle Theme</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
