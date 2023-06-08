import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React from "react";
import Hero from "./component/Hero";
import ProductMint from "./component/ProductMint";
import ProductBurn from "./component/ProductBurn";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <ProductMint />
      <ProductBurn />
      <FAQ />
      <Footer />
      <ToastContainer />
    </>
  );
}
