import { useAccount, useConnect } from 'wagmi'
import Game2048 from './Game2048.tsx'
import { useEffect, useState } from "react";
import { simulateContract, writeContract } from "@wagmi/core";
import { abi } from "./abi.ts";
import { config } from "./wagmi";
import { useReadContract } from "wagmi";
import CustomizedTables from './CustomizedTables.tsx';
function App() {
  const account = useAccount()
  const { connectors, connect} = useConnect()

  const [pay, setPay] = useState(false);
  

  const [refreshTrigger, setRefreshTrigger] = useState(0); // State to trigger refresh
  const [players, setPlayers] = useState<Player[]>([]);
  const contractAddress = import.meta.env.VITE_PAY_CONTRACT_ADDREESS;
  type Player = {
    name: string;
    score: number;
  }

  const result = useReadContract({
    address: contractAddress,
    abi: abi,
    functionName: "getPlayers",
    args: [],
  });

  const fetchPlayers = () => {
    console.log("Fetch players");
    console.log(result);
    var palye = (result.data ?? []).map((palyer) => ({
      name: palyer.playerAddress,
      score: Number(palyer.score)
    }));

    palye = palye.sort((a, b) => b.score - a.score);


    setPlayers(palye);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefreshTrigger((prev) => prev + 2); // Trigger a re-fetch every second
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);
   // Call the fetch function whenever refreshTrigger changes
   useEffect(() => {
    fetchPlayers();
  }, [refreshTrigger]);


  const doPay = () => {
    console.log("---- do pay ----");
   payable();
  };
  const payable = async () => {

    const valueInWei = BigInt(Math.floor(0.00002 * 10 ** 18)); // Convert 0.0007 ETH to Wei
 
    try {
      // Simulate the contract call to check if it will succeed
      const { request } = await simulateContract(config, {
        abi,
        address: contractAddress,
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

  const submitYourScore = async (score: number) => {

    if (!account) {
      console.error("No account connected");
      return;
    }

    try {

      const { request } = await simulateContract(config, {
        abi,
        address: contractAddress,
        functionName: "submitScore",
        args: [BigInt(score)],
      });

      // Proceed to write the contract if simulation succeeded
      console.log("Simulation succeeded, proceeding with transaction.");
      const hash = await writeContract(config, request);

      // Optionally, you can wait for the transaction receipt if needed
      console.log("Transaction sent, hash:", hash);
      
      // Show success modal or notification if needed
    } catch (error) {
      console.error("Error writing contract:", error);
    }
  };


  const handleSubmitScore = (score: number) => {
    console.log("---- submit score: " + score + " ----");
    submitYourScore(score);
  };
  return (
    <>
      {/* <div>
        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div> */}

      <Game2048 doPay={doPay} doConnectWallet={doConnectWallet} shouldPlay={pay} submitScore={handleSubmitScore}/>
      <CustomizedTables players={players}/>
    </>
  )
}

export default App
