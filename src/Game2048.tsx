import React, { useEffect, useState, useRef } from "react";
import "./2048/style/main.css"; // Adjust the path
import { useAccount } from 'wagmi';
import "./Game2048.css"; // Adjust the path
interface Game2048Props {
  submitScore: (score: number) => void;
  doPay: () => void;
  doConnectWallet: () => void;
  shouldPlay: boolean;
}

// interface HTMLActuator {
//   connectWallet: (isConnected: boolean) => void;
//   getScore: () => number;
// }
const Game2048: React.FC<Game2048Props> = ({doPay, doConnectWallet, shouldPlay, submitScore
}) => {
  const account = useAccount();
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const scriptElements: HTMLScriptElement[] = [];
  const htmlActuatorRef = useRef<HTMLActuator | null>(null);

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
      htmlActuatorRef.current = new (window as any).HTMLActuator();

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

  useEffect(() => {
    if (scriptsLoaded) {
      console.log("All scripts loaded");
      console.log("account.status: " + account.status);
      if (htmlActuatorRef.current) {
        htmlActuatorRef.current.connectWallet(account.status === 'connected');
      }
    }
  });

  useEffect(() => {
    if (shouldPlay) {
      console.log("Starting new game");
      startNewGame();
    }
  }, [shouldPlay]);

  const startNewGame = () => {
    const restartButton = document.getElementById("restart-button");
    if (restartButton) {
      restartButton.click();
    }
  }

  const handleNewGame = () => {
    if (account.status !== 'connected') {
      doConnectWallet();
    } else {
      doPay();
    }
  };

  const saveScore = () => {
    if (scriptsLoaded) {
      const textContent = document.getElementsByClassName("score-container")[0].textContent;
      if (textContent) {
        const score = parseInt(textContent.split("+")[0]  || "0");
        submitScore(score);
      }
    }
  }

  return (
    <div className="container">
      <a className="restart-button-action" id="restart-button"></a>
      
      <div className="heading">
      <img className="logo" src="/logo.png" alt="logo" />
        <h1 className="title">Linea 2048</h1>
      </div>
      <div>
      <div className="scores-container">
          <div className="score-container">0</div>
          {/* <div className="best-container">0</div> */}
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
            <a className="retry-button" onClick={handleNewGame}>{account.status === 'connected' ? "New Game" : "Connect Wallet"}</a>
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

      <div className="before-submit-game">
        </div>
<div className="submit-game">
<a onClick={saveScore}>Register your score</a>
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