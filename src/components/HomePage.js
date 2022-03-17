import styles from "../styles/homepage.module.scss";
import homepagelogo from "../images/homepagelogo.png";
import connectbutton from "../images/connectbutton.png";

const HomePage = (props) => {
  const { connectHandler, mintHandler, isConnected } = props;
  return (
    <div className={styles.Page}>
      <div className={styles.ContentContainer}>
        <img className={styles.PageLogoImg} src={homepagelogo} alt="" />
        <p>This isn’t a barren universe and we are never alone.</p>
        <p>
          A new era is about to begin and mankind will face unprecedented
          challenges.
        </p>
        <p>Only the strongest can lead us through this interstellar crisis…</p>
        {!isConnected ? (
          <button className={styles.ConnectButton} onClick={connectHandler}>
            <img
              className={styles.ConnectButtonImg}
              src={connectbutton}
              alt=""
            />
          </button>
        ) : (
          <button className={styles.ConnectButton} onClick={mintHandler}>
            Mint
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
