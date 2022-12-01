import "./App.css";
import Weather from "./Weather";
import Coded from "./Coded";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <Coded />
      </header>
    </div>
  );
}

export default App;
