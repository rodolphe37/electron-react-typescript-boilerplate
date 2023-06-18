import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type AppProps = {
  chrome: () => any;
  node: () => any;
  electron: () => any;
  ping: () => any;
};

function App({ chrome, node, electron, ping }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const func = useCallback(async () => {
    const response = await ping;
    console.log("ping", response); // Displays 'pong'.
  }, [ping]);

  useEffect(() => {
    setIsLoading(true);
    if (isLoading) {
      func();
    }

    return () => setIsLoading(false);
  }, [isLoading, func]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p
          style={{ fontSize: "1rem", maxWidth: 400 }}
          id="info"
        >{`This application use Chrome (v${chrome}), Node.js (v${node}), and Electron (v${electron})`}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <p>Learn</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          &
          <a
            className="App-link"
            href="https://www.electronjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Electron
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
