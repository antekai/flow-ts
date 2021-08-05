import logo from "./logo.svg";
import "./App.css";
import { userA } from "./flow-example";
import { addressA } from "./ts-example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>import from flow file: {userA.name}</p>
        <p>import from ts file: {addressA.street}</p>
      </header>
    </div>
  );
}

export default App;
