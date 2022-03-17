import { useState, useEffect } from "react";
import styles from "./styles/app.module.scss";
import background from "./images/background.png";
import { ethers } from "ethers";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import StoryPage from "./components/StoryPage";
import AlignmentPage from "./components/AlignmentPage";
import TeamPage from "./components/TeamPage";
import MechaPage from "./components/MechaPage";
import SocialMedias from "./components/SocialMedias";

const App = () => {
  const [language, setLanguage] = useState("En");
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const isMainnet = window.ethereum.networkVersion === "1";

  const languageChangeHandler = () => {
    if (language === "En") setLanguage("Tw");
    else setLanguage("En");
  };

  const connectHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => accountChangeHandler(result[0]));
    } else {
      alert("Install Meta Mesk");
    }
  };

  const accountChangeHandler = (newAddress) => {
    setAddress(newAddress);
    getAddressBalance(newAddress.toString());
  };

  const getAddressBalance = (newAddress) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [newAddress, "latest"] })
      .then((balance) => setBalance(ethers.utils.formatEther(balance)));
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  const mintHandler = () => {
    if (!isMainnet) {
      alert("錯誤網路！");
      return;
    }
    if (balance < 10) {
      alert("窮鬼");
      return;
    }
    alert("Mint!");
  };

  useEffect(() => {
    window.ethereum.on("accountsChanged", accountChangeHandler);
    window.ethereum.on("chainChanged", chainChangedHandler);
  });

  console.log(isMainnet);

  return (
    <div className={styles.App}>
      <img src={background} className={styles.BackgroundImg} alt="" />
      <NavBar language={language} languageOnChange={languageChangeHandler} />
      <HomePage
        connectHandler={connectHandler}
        mintHandler={mintHandler}
        isConnected={!!address}
      />
      <StoryPage />
      <AlignmentPage />
      <MechaPage />
      <TeamPage />
      <SocialMedias />
    </div>
  );
};

export default App;
