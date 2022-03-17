import styles from "../styles/storypage.module.scss";
import storypagetitle from "../images/storypagetitle.png";
import storypageavatar from "../images/storypageavatar.png";

const StoryPage = (props) => {
  return (
    <div className={styles.Page}>
      <div className={styles.Background}>
        <div className={styles.TextContainer}>
          <img className={styles.TitleImg} src={storypagetitle} alt="" />
          <div className={styles.Texts}>
            <p>在星際拓荒的前夜，人類卻突然面臨了來自宇宙的威脅！</p>
            <p>
              閃爍著金屬光輝的方尖碑墜向地表，伴隨而來的衝擊波與熾焰，睡間便吞沒了多數人口。倖存者從銘刻方尖碑的表面，破譯出那段出令人驚懼的倒數字符——
            </p>
            <p>「千年之後，迎來更大的破滅！」</p>
            <p>
              人們並未被絕望所擊倒，只因這既是危機、也是轉機。末日還有千年才會到來，方尖碑還隱藏著許多黑科技；人類，還有時間......
            </p>
          </div>
        </div>
        <img className={styles.Avatar} src={storypageavatar} alt="" />
      </div>
    </div>
  );
};

export default StoryPage;
