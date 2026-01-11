import { useAccount, useConnect, useSwitchChain, useReadContract } from 'wagmi';
import { linea } from 'wagmi/chains';
import Game2048 from './Game2048.tsx';
import { useState, useEffect } from "react";
import { simulateContract, writeContract } from "@wagmi/core";
import { abi } from "./abi.ts";
import { config } from "./wagmi.ts";
import CustomizedTables from './CustomizedTables.tsx';
import './theme.css';

function GamePage() {
  const account = useAccount();
  const { connectors, connect } = useConnect();
  const { switchChain } = useSwitchChain();

  const [pay, setPay] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const contractAddress = "0xd42024D7F424c18D2C0De50DC1681946Cb5Bb7E0";
  
  type Player = {
    name: string;
    score: number;
  }

  // Fetch multiple player entries from the contract
  // Since we don't have a getPlayers function, we'll try to read individual players
  // We'll attempt to read players at indices 0-99 and filter out invalid ones
  const playerIndices = Array.from({ length: 100 }, (_, i) => i);
  
  const playerQueries = playerIndices.map(index => 
    useReadContract({
      address: contractAddress,
      abi: abi,
      functionName: "players",
      args: [BigInt(index)],
    })
  );

  useEffect(() => {
    // Fetch and process players
    const fetchedPlayers: Player[] = [];
    
    playerQueries.forEach((query) => {
      if (query.data && Array.isArray(query.data) && query.data.length >= 2) {
        const playerAddress = query.data[0] as string;
        const score = Number(query.data[1]);
        
        // Only add valid players (non-zero address and score)
        if (playerAddress && playerAddress !== '0x0000000000000000000000000000000000000000' && score > 0) {
          // Check if this address already exists
          const existingPlayerIndex = fetchedPlayers.findIndex(p => p.name === playerAddress);
          
          if (existingPlayerIndex >= 0) {
            // Update if this score is higher
            if (score > fetchedPlayers[existingPlayerIndex].score) {
              fetchedPlayers[existingPlayerIndex].score = score;
            }
          } else {
            fetchedPlayers.push({
              name: playerAddress,
              score: score
            });
          }
        }
      }
    });

    // Sort by score and take top 10
    const sortedPlayers = fetchedPlayers.sort((a, b) => b.score - a.score).slice(0, 10);
    setPlayers(sortedPlayers);
  }, [refreshTrigger, ...playerQueries.map(q => q.data)]);

  // Auto-refresh every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefreshTrigger((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);


  const doStartGame = () => {
    console.log("---- do start game ----");
    if (account.chainId !== linea.id) {
      switchChain({ chainId: linea.id }, {
        onSuccess: () => {
          console.log("Switched to Linea network");
          startGame();
        },
        onError: (error) => {
          console.error("Failed to switch chain", error);
        }
      });
    } else {
      startGame();
    }
  };

  const startGame = async () => {

    const valueInWei = BigInt(1000 * 10 ** 9); // 1000 gwei
 
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
    const connector = connectors.find((c) => c.name === "MetaMask");
    if (connector) {
      console.log("find metamask");
      connect({ connector });
    } else {
      console.log("MetaMask connector not found");
    }
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
        functionName: "registerScore",
        args: [BigInt(score)],
        value: BigInt(1000 * 10 ** 9), // 1000 gwei
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
      <Game2048 doPay={doStartGame} doConnectWallet={doConnectWallet} shouldPlay={pay} submitScore={handleSubmitScore}/>
      <CustomizedTables players={players}/>
    </>
  )
}

export default GamePage
