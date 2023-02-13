import logo from './logo.svg';
import './App.css';
import {counter} from './main.js';

let text = ''
const {letters,words,sentences} = counter(text)

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={(event) => text=event.taget.value} placeholder='Your Text'></input><button>Submit</button>
        <div>{`In your text, there are ${letters} letters, ${words} words and ${sentences} sentences.`}</div>
    </div>
  );
}

export default App;
