import React from "react";
import { RecoilRoot } from "recoil";
import Header from "../components/atoms/Header.js";
import Footer from "../components/atoms/Footer.js";
import "../styles/reset.css";
import "../styles/main.css";

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
