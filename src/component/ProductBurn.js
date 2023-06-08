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

export default function ProductBurn() {
  const [transactionConfirmed, setTransactionConfirmed] = useState(false);

  useEffect(() => {
    if (transactionConfirmed) {
      const newWindow = window.open(
        "https://docs.google.com/forms/d/1DS-0QU7XnhfhaUUIVZ5m_J6F0niBtJ0O0VZDH8JpXko",
        "_blank"
      );
      newWindow.focus();
    }
  }, [transactionConfirmed]);

  async function burnSweatshirt() {
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
        const transaction = await contract.burn({ gasLimit: 500000 });

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "La transaction a été confirmée",
            autoClose: 5000,
            onComplete: () => {
              const newWindow = window.open(
                "https://docs.google.com/forms/d/1DS-0QU7XnhfhaUUIVZ5m_J6F0niBtJ0O0VZDH8JpXko",
                "_blank"
              );
              newWindow.blur();
            },
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });

        
        setTransactionConfirmed(true);
      } else {
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
  }

  async function burnHoodie() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(HoodieAddress, HoodieABI, signer);
        const transaction = await contract.burn({ gasLimit: 500000 });

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "Le formulaire va s'ouvrir",
            autoClose: 5000,
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });
        setTransactionConfirmed(true);
      } else {
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
  }

  async function burnTShirt() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const signer = provider.getSigner(accounts[0]);
        const contract = new ethers.Contract(TShirtAddress, TShirtABI, signer);
        const transaction = await contract.burn({ gasLimit: 500000 }); // Replace "mint" with the name of your mint function

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "Le formulaire va s'ouvrir",
            autoClose: 5000,
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });
        setTransactionConfirmed(true);
      } else {
        console.log("MetaMask is not installed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite");
    }
  }

  async function burnEcharpe() {
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
        const transaction = await contract.burn({ gasLimit: 500000 }); // Replace "mint" with the name of your mint function

        toast.promise(transaction.wait(), {
          pending: "Transaction en cours...",
          success: {
            render: "Le formulaire va s'ouvrir",
            autoClose: 5000,
          },
          error: {
            render: "Une erreur s'est produite",
            autoClose: 5000,
          },
        });
        setTransactionConfirmed(true);
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
          paddingBottom: "5rem",
        }}
      >
        <h1
          style={{
            marginBottom: "2rem",
            paddingTop: "5rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          ÉTAPE 2 : BURN TON NFT
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
          Cette étape est obligatoire pour obtenir ton NFT au format physique,
          tu vas devoir choisir quel type de NFT tu compte 'burn' ainsi que
          répéter l'opération si tu veux recevoir plusieurs pièce de la même
          catégorie. Cette action ouvrira un formulaire pour te demander la
          taille souhaitée, et les informations de livraison. Comme pour le
          'mint' il n'y a pas de limite mais tu devras le faire un par un. Ne
          tarde pas les tailles sont limitées remplie vite le form pour avoir
          celle qui te correspond !
        </p>
        <div className="row col-12 d-flex justify-content-center">
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
                {" "}
                Description produit
              </p>
              <button
                className="btn btn-outline-secondary btn-lg w-100"
                onClick={burnSweatshirt}
                style={{ color: "white" }}
              >
                Burn now
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
              src="/./img/Hoodie.png"
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
                style={{ color: "white" }}
                onClick={burnHoodie}
              >
                Burn now
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
              src={"./img/TShirt.png"}
              alt="T shirt"
            />
            <div className="card-body">
              <h5
                className="card-title p-4"
                style={{ color: "white", fontWeight: "bold" }}
              >
                T-SHIRT
              </h5>
              <p className="card-text p-3" style={{ color: "#858585" }}>
                Description produit
              </p>
              <button
                className="btn btn-outline-secondary btn-lg w-100"
                onClick={burnTShirt}
                style={{ color: "white" }}
              >
                Burn now
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
            {" "}
            <img
              className="card-img-top"
              style={{ borderRadius: "0.25rem 0.25rem 0 0" }}
              src="./img/Echarpe.png"
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
                {" "}
                Description produit
              </p>
              <button
                className="btn btn-outline-secondary btn-lg w-100"
                onClick={burnEcharpe}
                style={{ color: "white" }}
              >
                Burn now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
