import { useState } from "react";
import styles from "../styles/navbar.module.scss";
import navbar from "../images/navbar.png";
import navbarlogo from "../images/navbarlogo.png";
import menu from "../images/menu.png";
import close from "../images/close.png";

const NavBar = (props) => {
  const { language, languageOnChange } = props;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const buttons = [
    "STORY",
    "ALIGNMENT",
    "MECHA",
    "CARD",
    "WHITEPAPER",
    "TEAM",
    "PARTNERS",
  ];

  const handleButtonsRender = () => {
    return (
      <>
        {buttons.map((button) => (
          <button className={styles.Button} key={`button-${button}`}>
            {button}
          </button>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={styles.NavBar}>
        <img className={styles.BackgroundImg} src={navbar} alt="" />
        <div className={styles.Container}>
          <img className={styles.LogoImg} src={navbarlogo} alt="" />
          <div className={styles.ButtonContainer}>
            {handleButtonsRender()}
            <button
              className={styles.LanguageButton}
              onClick={languageOnChange}
            >
              {language}
            </button>
          </div>
          <img
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className={styles.MenuButton}
            src={menu}
            alt=""
          />
        </div>
      </div>
      {menuIsOpen && (
        <div className={styles.Menu}>
          <div className={styles.Container}>
            <img className={styles.LogoImg} src={navbarlogo} alt="" />
            <img
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className={styles.MenuButton}
              src={close}
              alt=""
            />
          </div>
          <div className={styles.MenuButtonContainer}>
            {handleButtonsRender()}
            <button
              className={styles.LanguageButton}
              onClick={languageOnChange}
            >
              {language}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
