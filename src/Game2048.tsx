import React, { useEffect, useState } from "react";
import "./2048/style/main.css"; // Adjust the path
import { useAccount } from 'wagmi';

interface Game2048Props {
  doPay: () => void;
  doConnectWallet: () => void;
  // newGame: () => void;
}

const Game2048: React.FC<Game2048Props> = ({doPay, doConnectWallet}) => {
  const account = useAccount();
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const scriptElements: HTMLScriptElement[] = [];

  useEffect(() => {
    // Load game scripts dynamically
    const scripts = [
      "js/bind_polyfill.js",
      "js/classlist_polyfill.js",
      "js/animframe_polyfill.js",
      "js/keyboard_input_manager.js",
      "js/html_actuator.js",
      "js/grid.js",
      "js/tile.js",
      "js/local_storage_manager.js",
      "js/game_manager.js",
      "js/application.js",
    ];

    const loadScripts = scripts.map((src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `./2048/${src}`; // Adjust path to match your public folder
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
        scriptElements.push(script);
      });
    });

    Promise.all(loadScripts).then(() => {
      setScriptsLoaded(true);
      console.log("All scripts loaded");

      if (account.status !== 'connected') {
      const actuator = new window.HTMLActuator();
      actuator.connectWallet();
      }


    }).catch((error) => {
      console.error("Error loading scripts", error);
    });

    return () => {
      // Cleanup scripts on unmount
      scriptElements.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  const handleNewGame = () => {
    if (account.status !== 'connected') {
      doConnectWallet();
      if (scriptsLoaded) {
        const actuator = new window.HTMLActuator();
        actuator.connectWallet();
      }
    } else {
      doPay();
      const restartButton = document.getElementById("restart-button");
      if (restartButton) {
        restartButton.click();
      }
    }
  };

  return (
    <div className="container">
      <a className="restart-button-action" id="restart-button"></a>
      <div className="heading">
        <h1 className="title">Linea 2048</h1>
        <div className="scores-container">
          <div className="score-container">0</div>
          <div className="best-container">0</div>
        </div>
      </div>
      <br/>
      <div className="above-game">
        <p className="game-intro">
          Join the numbers and get to the <strong>Linea 2048 tile!</strong>
        </p>
        <a className="restart-button" onClick={handleNewGame}>
          {account.status === 'connected' ? "New Game" : "Connect Wallet"}
        </a>
      </div>

      <div className="game-container">
        <div className="game-message">
          <p></p>
          <div className="lower">
            <a className="keep-playing-button">Keep going</a>
            <a className="retry-button" onClick={handleNewGame}>Try again</a>
          </div>
        </div>

        <div className="grid-container">
          {Array.from({ length: 4 }, (_, row) => (
            <div className="grid-row" key={row}>
              {Array.from({ length: 4 }, (_, col) => (
                <div className="grid-cell" key={col}></div>
              ))}
            </div>
          ))}
        </div>

        <div className="tile-container"></div>
      </div>

      <p className="game-explanation">
        <strong className="important">How to play:</strong> Use your{" "}
        <strong>arrow keys</strong> to move the tiles. When two tiles with the
        same number touch, they <strong>merge into one!</strong>
      </p>
    </div>
  );
};

export default Game2048;