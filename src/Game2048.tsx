import React, { useEffect } from "react";
import "./2048/style/main.css"; // Adjust the path


const Game2048: React.FC = () => {

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
      const script = document.createElement("script");
      script.src = `./2048/${src}`; // Adjust path to match your public folder
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      // Cleanup scripts on unmount
      loadScripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return (
    <div className="container">
      <div className="heading">
        <h1 className="title">Linea 2048</h1>
        <div className="scores-container">
          <div className="score-container">0</div>
          <div className="best-container">0</div>
        </div>
      </div>

      <div className="above-game">
        <p className="game-intro">
          Join the numbers and get to the <strong>2048 tile!</strong>
        </p>
        <a className="restart-button" onClick={() => window.location.reload()}>
          New Game
        </a>
      </div>

      <div className="game-container">
        <div className="game-message">
          <p></p>
          <div className="lower">
            <a className="keep-playing-button">Keep going</a>
            <a className="retry-button" onClick={() => window.location.reload()}>
              Try again
            </a>
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
