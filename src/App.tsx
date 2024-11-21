import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Game2048 from './Game2048.tsx'
import { useState } from "react";
function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  const [pay, setPay] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  
  const doPay = () => {
    setPay(true);
  };

  const doConnectWallet = () => {
console.log("---- do connect wallet ----");
    connectors.map((connector) => (
      connector.name === "MetaMask" && (
        console.log("find metamask"),
        connect({ connector })
      )
    ))
  };
  return (
    <>
      <div>
        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <Game2048 doPay={doPay} doConnectWallet={doConnectWallet}/>
    </>
  )
}

export default App
