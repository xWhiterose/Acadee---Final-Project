import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import SweatShirtABI from "../abi/SweatShirtABI";
import HoodieABI from "../abi/HoodieABI";
import TShirtABI from "../abi/TShirtABI";
import EcharpeABI from "../abi/EcharpeABI";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const SweatShirtAddress = "0x76cefC1ee88a710E6F603D95282dcCD2c7746082";
const HoodieAddress = "0x6F262c8f2f8a60cc04a7a00C2370df5a93B70162";
const TShirtAddress = "0x5a5a000B2bAB6EA9043EC3c2aA872EC964D4eeEB";
const EcharpeAddress = "0x3819933154502BCD3c268e5803C73e04bcc1dAf6";

export default function ProductMint() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (window.ethereum && window.ethereum.isConnected()) {
      setIsConnected(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.ethereum && window.ethereum.isConnected()) {
        setIsConnected(true);
      }
    });
  }, []);

  async function mintSweatshirt() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(
          SweatShirtAddress,
          SweatShirtABI,
          signer
        );
        const value = ethers.utils.parseEther("0.05");
        const transaction = await contract.mint({ value, gasLimit: 500000 });

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "Le SweatShirt est à vous",
            autoClose: 5000,
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });
      } else {
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
  }

  async function mintHoodie() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(HoodieAddress, HoodieABI, signer);
        const value = ethers.utils.parseEther("0.04");
        const transaction = await contract.mint({ value, gasLimit: 500000 });

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "Le Hoodie est à vous",
            autoClose: 5000,
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });
      } else {
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
  }

  async function mintTShirt() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(TShirtAddress, TShirtABI, signer);
        const value = ethers.utils.parseEther("0.03");
        const transaction = await contract.mint({ value, gasLimit: 500000 });

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "Le T Shirt est à vous",
            autoClose: 5000,
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });
      } else {
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
  }

  async function mintEcharpe() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(
          EcharpeAddress,
          EcharpeABI,
          signer
        );
        const value = ethers.utils.parseEther("0.02");
        const transaction = await contract.mint({ value, gasLimit: 500000 });

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "L'echarpe est à vous",
            autoClose: 5000,
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });
      } else {
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#0D0D0D",
          textAlign: "center",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          width: "100%",
        }}
      >
        <h1
          style={{ color: "white", marginBottom: "2rem", fontWeight: "bold" }}
        >
          ÉTAPE 1 : MINT TON NFT
        </h1>
        <p
          className="text-secondary col-12 col-md-12 col-lg-12 p-2"
          style={{
            lineHeight: "1.5",
            fontSize: "1.3rem",
            textTransform: "uppercase",
            textAlign: "justify",
            maxWidth: "1680px",
            margin: "0 auto",
            marginBottom: "4rem",
          }}
        >
          La première étape consiste à mint un ou plusieurs NFT de votre choix,
          correspondant chacun à une pièce différente : SweatShirt, Hoodie, T
          Shirt et Echarpe. Pour éviter de se faire vider le stock trop
          rapidement par une poignée d'utilisateurs les mint doivent se faire un
          par un pour complexifier un peu la chose. Il n'y pas de restriction en
          termes de quantité, premier arrivé premier servi !
        </p>
        <div className="row col-12 d-flex justify-content-center">
          <div
            className="col-12 col-md-6 col-lg-3 mb-4 mx-4 rounded p-0"
            style={{
              backgroundColor: "#242424",
              width: "20%",
            }}
          >
            <img
              className="card-img-top"
              style={{ borderRadius: "0.25rem 0.25rem 0 0" }}
              src="./img/SweatShirt.png"
              alt="Sweat Shirt"
            />
            <div className="card-body">
              <h5
                className="card-title p-4"
                style={{ color: "white", fontWeight: "bold" }}
              >
                SWEAT SHIRT
              </h5>
              <p className="card-text p-3" style={{ color: "#858585" }}>
                Description produit
              </p>
              <button
                className="btn btn-outline-secondary btn-lg w-100"
                onClick={mintSweatshirt}
                style={{ color: "white" }}
              >
                {isConnected ? "Mint now for 0.05 Ξ" : "Connect to MetaMask"}
              </button>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-xs-12 col-md-6 col-lg-3 mb-4 mx-4 rounded p-0"
            style={{
              backgroundColor: "#242424",
              width: "20%",
            }}
          >
            <img
              className="card-img-top"
              style={{ borderRadius: "0.25rem 0.25rem 0 0" }}
              src="./img/Hoodie.png"
              alt="Hoodie"
            />
            <div className="card-body">
              <h5
                className="card-title p-4"
                style={{ color: "white", fontWeight: "bold" }}
              >
                HOODIE
              </h5>
              <p className="card-text p-3" style={{ color: "#858585" }}>
                Description produit
              </p>
              <button
                className="btn btn-outline-secondary btn-lg w-100"
                onClick={mintHoodie}
                style={{ color: "white" }}
              >
                {isConnected ? "Mint now for 0.04 Ξ" : "Connect to MetaMask"}
              </button>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-x-12 col-md-6 col-lg-3 mb-4 mx-4 rounded p-0"
            style={{
              backgroundColor: "#242424",
              width: "20%",
            }}
          >
            <img
              className="card-img-top"
              style={{ borderRadius: "0.25rem 0.25rem 0 0" }}
              src="./img/TShirt.png"
              alt="T shirt"
            />
            <div className="card-body">
              <h5
                className="card-title p-4"
                style={{ color: "white", fontWeight: "bold" }}
              >
                T SHIRT
              </h5>
              <p className="card-text p-3" style={{ color: "#858585" }}>
                Description produit
              </p>
              <button
                className="btn btn-outline-secondary btn-lg w-100"
                onClick={mintTShirt}
                style={{ color: "white" }}
              >
                {isConnected ? "Mint now for 0.03 Ξ" : "Connect to MetaMask"}
              </button>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-x-12 col-md-6 col-lg-3 mb-4 mx-4 rounded p-0"
            style={{
              backgroundColor: "#242424",
              width: "20%",
            }}
          >
            <img
              className="card-img-top"
              style={{ borderRadius: "0.25rem 0.25rem 0 0" }}
              src={"./img/Echarpe.png"}
              alt="Echarpe"
            />
            <div className="card-body">
              <h5
                className="card-title p-4"
                style={{ color: "white", fontWeight: "bold" }}
              >
                ECHARPE
              </h5>
              <p className="card-text p-3" style={{ color: "#858585" }}>
                Description produit
              </p>
              <button
                className="btn btn-outline-secondary btn-lg w-100"
                onClick={mintEcharpe}
                style={{ color: "white" }}
              >
                {isConnected ? "Mint now for 0.02 Ξ" : "Connect to MetaMask"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
