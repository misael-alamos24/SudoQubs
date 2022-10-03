import logo from './logo.svg';
import './App.css';
// import Zero from './components/0-Zero';
// import One from './components/1-One';
import Two from './components/2-Two.jsx';

// const {
//   possCols,
//   possRows,
//   possBoxs,
// } = require('./functions/2-Estructures.js');

// let rows= possRows()
// let cols= possCols()
// let boxs= possBoxs()


function App() {
  // console.log(rows)

  return (
    <div className="App">
      {  <Two /> }
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
