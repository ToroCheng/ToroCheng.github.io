import styles from "../styles/socialmedias.module.scss";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import medium from "../images/medium.png";

const SocialMedias = () => {
  const medias = [twitter, discord, medium];
  const urls = ["", "", ""];

  return (
    <div className={styles.Medias}>
      {medias.map((mediaSrc, index) => (
        <img
          className={styles.Button}
          onClick={() => window.open(urls[index])}
          src={mediaSrc}
          alt=""
          key={`media-${index}`}
        />
      ))}
    </div>
  );
};

export default SocialMedias;
