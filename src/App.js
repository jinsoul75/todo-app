import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>오늘은 6월 15일 9시 10분</div>
        <div>오늘은 6월 15일 9시 33분</div>
        <div>오늘은 6월 15일 9시 50분</div>
      </header>
    </div>
  );
}

export default App;
