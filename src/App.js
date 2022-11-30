import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {
  let name = "nghia1"
  let number = 2021
  let obj = { name: 'eric', number: 2002 }
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world {name}-{number}
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
