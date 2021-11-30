import Web3 from "web3";

export default function getWeb3() {
    let web3;
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
    }
    else if (window.web3) {
        web3 = new Web3(window.web3);
    }
    else {
        const provider = new Web3.providers.HttpProvider(
            
        );
        
        web3 = new Web3(provider);
    }

    return web3;
}