import logo from './logo.svg'
import './App.css'
import useState from 'react'

function App() {
  
  // const [timer, setTimer] = useState('')
  
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <ul>
        <li><button>15 minutes</button></li>
        <li><button>30 minutes</button></li>
        <li><button>45 minutes</button></li>
        <li><button>60 minutes</button></li>
      </ul>
    </div>
  );
}

export default App;
