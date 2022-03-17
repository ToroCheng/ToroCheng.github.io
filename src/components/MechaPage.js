import { useState } from "react";
import styles from "../styles/mechapage.module.scss";
import mechatitle from "../images/mechatitle.png";
import layer1 from "../images/mechalayer1.png";
import layer2 from "../images/mechalayer2.png";
import layer3 from "../images/mechalayer3.png";
import layer4 from "../images/mechalayer4.png";
import mechaspecial from "../images/mechaspecial.png";
import mechalite from "../images/mechalite.png";
import mechaheavy from "../images/mechaheavy.png";
import mechamid from "../images/mechamid.png";
import mechaoptioncover from "../images/mechaoptioncover.png";

const MechaPage = () => {
  const [selectedMechaIndex, setSelectedMechaIndex] = useState(0);
  const mechas = [mechaspecial, mechalite, mechaheavy, mechamid];

  return (
    <div>
      <img className={styles.Title} src={mechatitle} alt="" />
      <div className={styles.OverlayImgsContainer}>
        <img className={styles.NormalImg} src={layer1} alt="" />
        <img className={styles.NormalImg} src={layer2} alt="" />
      </div>
      <div className={styles.Container}>
        <img
          className={styles.SelectedMechaImg}
          src={mechas[selectedMechaIndex]}
          alt=""
        />
        <img className={styles.NormalImg} src={layer3} alt="" />
        <img className={styles.NormalImg} src={layer4} alt="" />
        <div className={styles.OptionsContainer}>
          {mechas.map((mecha, index) => (
            <div
              className={styles.Option}
              onClick={() => setSelectedMechaIndex(index)}
            >
              <img
                className={styles.OptionImg}
                style={
                  index === selectedMechaIndex
                    ? {}
                    : { filter: "brightness(0.2)" }
                }
                src={mecha}
                alt=""
              />
              <img
                className={styles.OptionCover}
                src={mechaoptioncover}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className={styles.TextContainer}>
          <div className={styles.TitleContainer}>
            <p className={styles.TitleText}>重裝步兵型機甲</p>
            <p className={styles.SubtitleText}>(P型機甲)</p>
          </div>
          <p className={styles.TypeText}>Principes / 重型</p>
          <p className={styles.InfoText}>
            火星陣營的中型機甲，也是帝國軍團的中堅戰力。以巨大的長程火炮『標槍』為作戰主力，能廣泛地進行中、長程的火炮投射，但由於是專精火力打擊的機甲，因此極度缺乏近戰用武裝，同時行動也較為笨重。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MechaPage;
