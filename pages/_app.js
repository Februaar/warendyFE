import React from "react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import "../styles/main.css";
import Header from "../components/atoms/Header.js";
import Footer from "../components/atoms/Footer.js";

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
};

export default App;
