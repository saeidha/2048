import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Game2048 from './Game2048.tsx'
import { useState } from "react";
import { simulateContract, writeContract } from "@wagmi/core";
import { abi } from "./abi.ts";
import { config } from "./wagmi";
import CustomizedTables from './CustomizedTables.tsx';
function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  const [pay, setPay] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  
  const doPay = () => {
    console.log("---- do pay ----");
   payable();
  };
  const payable = async () => {

    const valueInWei = BigInt(Math.floor(0.00004 * 10 ** 18)); // Convert 0.0007 ETH to Wei
 
    try {
      // Simulate the contract call to check if it will succeed
      const { request } = await simulateContract(config, {
        abi,
        address: import.meta.env.VITE_PAY_CONTRACT_ADDREESS,
        functionName: "pay",
        args: [], // Add any necessary arguments for the 'pay' function here
        value: valueInWei,
      });

      // Proceed to write the contract if simulation succeeded
      console.log("Simulation succeeded, proceeding with transaction.");

      const hash = await writeContract(config, request);

      // Optionally, you can wait for the transaction receipt if needed
      console.log("Transaction sent, hash:", hash);
      setPay(true);
    } catch (error) {
      console.error("Error writing contract:", error);
      //setError("Transaction failed");
    }
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


  const handleSubmitScore = (score: number) => {

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

      <Game2048 doPay={doPay} doConnectWallet={doConnectWallet} shouldPlay={pay} submitScore={handleSubmitScore}/>
      <CustomizedTables/>
    </>
  )
}

export default App
