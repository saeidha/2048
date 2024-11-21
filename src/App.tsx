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
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {/* {connectors.map((connector) => (
          connector.name === "MetaMask" && (
          
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        )))} */}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      <Game2048 doPay={doPay} doConnectWallet={doConnectWallet}/>
    </>
  )
}

export default App
