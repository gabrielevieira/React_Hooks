import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <h1>
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </h1>
  );
};

function Example() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `You clicked ${count} times`;
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
