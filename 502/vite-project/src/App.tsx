import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  return (
    <div>
      <h1>Vite + React</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">    
        <p>
          <a href="/src/class1/A01025119/webpage/A01025119.html" target="_blank" rel="noopener noreferrer" >
          A01025119 Pagina de Do Kyu
          </a>
          <a href="/A01025119.html" target="_blank" rel="noopener noreferrer" >
          A01025119 Pagina de Do Kyu
          </a>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
