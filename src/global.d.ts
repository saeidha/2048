// global.d.ts
interface HTMLActuator {
    connectWallet: (isConnected: boolean) => void;
    getScore: () => number;
  }
  
  interface Window {
    HTMLActuator: new () => HTMLActuator;
  }
  