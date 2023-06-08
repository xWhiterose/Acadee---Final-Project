import { useState, useEffect } from "react";

export default function Hero() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    checkWalletConnection();
  }, []);

  async function checkWalletConnection() {
    if (window.ethereum && window.ethereum.isConnected()) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setIsConnected(true);
        setWalletAddress(accounts[0]);
      }
    }
  }

  async function connectToMetaMask() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        if (window.ethereum.isConnected()) {
          const networkId = await window.ethereum.request({
            method: "net_version",
          });
          if (networkId === "5") {
            setIsConnected(true);
            const accounts = await window.ethereum.request({
              method: "eth_accounts",
            });
            if (accounts && accounts.length > 0) {
              const walletAddress = accounts[0];
              setWalletAddress(walletAddress);
            }
          } else {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x5" }],
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  }

  return (
    <>
      <div
        className="p-5 text-center flex items-center justify-center"
        style={{
          backgroundColor: "#0D0D0D",
        }}
      >
        <div className="bg-opacity-60">
          <div className="text-white">
            <h1
              className="col-12 uppercase mb-5"
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Bienvenue la première collection physique de Mon Projet
            </h1>
            <h5
              className="text-secondary  mb-5"
              style={{
                lineHeight: "1.5",
                fontSize: "1.3rem",
                textTransform: "uppercase",
                textAlign: "justify",
                maxWidth: "1680px",
                margin: "0 auto",
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </h5>
            <h1
              className="col-12 uppercase mb-5"
              style={{
                paddingTop: "4rem",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              étape 0 : Connecte ton wallet
            </h1>
            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={connectToMetaMask}
              style={{ color: "white" }}
              disabled={isConnected}
            >
              {isConnected
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                : "Login with MetaMask"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
