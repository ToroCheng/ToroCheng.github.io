import styles from "../styles/alignmentpage.module.scss";
import alignmentitle from "../images/alignmentitle.png";
import card1 from "../images/card1.png";
import card1cover from "../images/card1cover.png";
import card2 from "../images/card2.png";
import card2cover from "../images/card2cover.png";
import card3 from "../images/card3.png";
import card3cover from "../images/card3cover.png";

const AlignmentPage = () => {
  return (
    <div className={styles.Page}>
      <img className={styles.TitleImg} src={alignmentitle} alt="" />
      <div className={styles.CardsContainer}>
        <div className={styles.Card}>
          <img className={styles.CardImg} src={card1} alt="" />
          <img className={styles.CardCoverImg} src={card1cover} alt="" />
          <div className={styles.TextContainer}>
            <div>
              災變破壞了地球生態系，全面沙漠化的地表上，僅有方尖碑周圍還保有少數綠洲。倖存的人們信奉著享樂主義，駕駛著拼裝機甲漫遊，喇叭播放著音樂，四處蒐集災前的可用資源。
            </div>
            <div>
              這支地表遊牧族沿著綠洲建造地下化巨型聚落，在烈日下巡航勞務後，輪流進入虛擬空間，在「永劫之樂」中享受災變前的生活。一方面，地底挖出的遺跡，揭示了恐龍時代也曾遭遇過相同災變。於是這些滅絕的溫血泰坦成為了信仰圖騰，地球人堅信——來自太空的只有災難。
            </div>
            <div>
              地球人願維持著這貧困伊甸園的生活方式，自外於其他文明。他們在衛星軌道上啟動自動化工程，試圖以剩餘的數百年時間建立「深度空間潛航器」，將地球的蹤跡永遠隱匿於星間。
            </div>
          </div>
        </div>
        <div className={styles.Card}>
          <img className={styles.CardImg} src={card2} alt="" />
          <img className={styles.CardCoverImg} src={card2cover} alt="" />
          <div className={styles.TextContainer}>
            <div>
              人類登月後，有一小群人篤信大氣是與宇宙交流的沉窒阻礙，而月球，則是最適當的新家園。他們成為教派，也成為了第一批的月球移民。
            </div>
            <div>
              他們深信人類的未來在星空，正是人類永無止境的的自私與貪婪耗盡了星際導師的耐心，才對地球降下方尖碑示警。
            </div>
            <div>
              月球文明將一座方尖碑遷徙至月球，從中破譯出的資訊，讓人類得以回溯過往歷史，從而理解到人類打從文明初生之蹄起，便全然蒙受著來自宇宙的眷顧與恩惠。
            </div>
            <div>
              這項發現與教義完美驗證，於是月球人將方尖碑當作宇宙的信使，努力理解其中的資訊。他們重新定義自己為星辰之子，試圖跳脫人類的既有格局，全體進化為充滿靈性的宇宙民族。
            </div>
          </div>
        </div>
        <div className={styles.Card}>
          <img className={styles.CardImg} src={card3} alt="" />
          <img className={styles.CardCoverImg} src={card3cover} alt="" />
          <div className={styles.TextContainer}>
            <div>
              「拓荒者」是人們賦予火星移民的美好名字，而這個名詞實際的意義，則是「宇宙流刑者」——殺戮、姦淫、掠奪，以及......該死的貧窮，背負上述重罪之人，都拿到一張前往火星的單程船票，前往紅色行星，去開拓屬自己的新家園。
            </div>
            <div>
              火星的嚴苛與冰冷，唯有鐵血般的紀律，能弭平所有不利環境的挑戰；這形塑了火星人堅忍的性格，對秩序與群體使命的認同，使他們願意接受改造，成為擁有返祖特徵的新民族，以對抗未來的挑戰。
            </div>
            <div>
              在這顆以戰神為名的行星上，人們建立以兩位執政官為基礎的鐵腕政治。面對千年後的威脅，他們並不打算就此屈膝，進攻就是最好的防守，開拓與征服，是這群紅砂之子唯一的進路！
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlignmentPage;
