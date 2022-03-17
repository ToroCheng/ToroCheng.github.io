import styles from "../styles/teampage.module.scss";
import teamtitle from "../images/teamtitle.png";
import teammateImg from "../images/teammate.png";

const TeamPage = () => {
  const teammates = [
    { name: "DUKE RABBIT", title: "Founder & Project Manager" },
    { name: "RESH HUANG", title: "Game Designer" },
    { name: "TORO CHENG", title: " Principal Engineer" },
    { name: "J.K.", title: "Mech Concept" },
    { name: "POPOKING", title: "Game Art" },
    { name: "WU-HSUN LEE", title: "Story & Scriptwriter" },
    { name: "CYNDY HOY", title: "Community" },
  ];

  return (
    <div>
      <img className={styles.Title} src={teamtitle} alt="" />
      <div className={styles.Background}>
        <div className={styles.TeammatesContainer}>
          {teammates.map((teammate) => (
            <div
              className={styles.TeammateContainer}
              key={`teammate-${teammate.name}`}
            >
              <img className={styles.TeammateImg} src={teammateImg} alt="" />
              <p className={styles.NameText}>{teammate.name}</p>
              <p className={styles.TitleText}>{teammate.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
