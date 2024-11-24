// src/global.d.ts
interface HTMLActuator {
    connectWallet: (isConnected: boolean) => void;
    getScore: () => number;
  }
  
  declare global {
    interface Window {
      HTMLActuator: new () => HTMLActuator;
    }
  }
  
  export {};
  