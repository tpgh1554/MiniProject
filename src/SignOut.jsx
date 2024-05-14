import styles from "./SignOut.module.css";
import Background from "./Background/Background";
import Header from "./Background/Header";
const SignOut = () => {
  return (
    <Background>
      <Header />
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.title}>회원탈퇴</p>
          <div className={styles.imageItem}></div>

          <input type="text" placeholder="이름" />
          <input type="text" placeholder="주민등록번호" />
          <p></p>
          <div className={styles.finalCheck}>탈퇴</div>
        </div>
      </div>
    </Background>
  );
};
export default SignOut;
