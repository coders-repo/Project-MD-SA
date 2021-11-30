import React, {useState} from "react";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../utility/connector";
import './style.scss';

export default function ConnectWallet () {
  const [ConnectWallet, setConnectWallet] = useState(false);
  const { account, activate } = useWeb3React();

  const connectWallet = async() => {
    try {
      activate(injected);
      setConnectWallet(true);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <a className={`wallet_connected ${ConnectWallet ? 'CWNameTrue' : 'CWNameFalse'}`}>
          {
            account ? 
            <div className="Wallet-Connect">
              <p>{account.substr(0,6) + '...' + account.substr(-4) }</p>
            </div>
            :
            <div className="Wallet-NotConnect" onClick={connectWallet}>
              <p>Connect Wallet</p>
            </div>
          }
      </a>
    </>
  );
}

