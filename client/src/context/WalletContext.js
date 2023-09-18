import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from "./AuthContext";
import axios from "axios";
const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isMuted, setIsMuted] = useState(true);
  const [shareBalances, setShareBalances] = useState(null);
  const [checkedShares, setCheckedShares] = useState(false);

  useEffect(() => {
    if(user) {
      getTokens(user.address);
      // getTokens("0x4e5f7e4a774bd30b9bdca7eb84ce3681a71676e1");
    }
  }, [user]);

  async function getFTData(address) {
    try {
      const data = await axios.get("https://prod-api.kosetto.com/holdings-activity/" + address);
      if (data.data.events.length > 0) {
        return data.data.events
        // handleFTData(data.data.events, address);
      } else {
        return null;
        // alert("If you'd like to continue with your friend.tech account, export account.");
      }
    } catch (error) {
      console.log(error)
      return null;
    }
  }

  async function getTokens(address) {
    const transactions = await getFTData(address);
    console.log(transactions);
    const subjectBalances = {};
    if (transactions) {
      transactions.forEach(transaction => {
        const { isBuy, shareAmount, subject } = transaction;
        const address = subject.address;
        const amount = parseFloat(shareAmount);

        if (!subjectBalances[address]) {
          subjectBalances[address] = {
            balance: 0,
            profileImg: subject.pfpUrl,
            name: subject.name,
            username: subject.username
          };
        }
        if (isBuy) {
          subjectBalances[address].balance += amount;
        } else {
          subjectBalances[address].balance -= amount;
        }
      });
      const subjectBalancesArray = Object.entries(subjectBalances).map(([address, data]) => ({
        address,
        ...data
      }));
      console.log(subjectBalancesArray);
      setShareBalances(subjectBalancesArray);
    } else {
      setShareBalances(null);
    }
    // console.log("Subject Balances:", subjectBalances);
    return subjectBalances;
  }

  async function findUserByAddress(address) {
    const transactions = await getFTData(address);
    let FTUserData;
    if (transactions) {
      FTUserData = transactions.find(transaction => transaction.subject.address.toUpperCase() === address.toUpperCase());
    }
    return FTUserData;
  }

  return (
    <WalletContext.Provider value={{ isMuted, setIsMuted, shareBalances, setShareBalances, getTokens, findUserByAddress }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);