import { FunctionComponent } from "react";
import Container from "../components/Container";
import styles from "./Assinatura.module.css";

const Assinatura: FunctionComponent = () => {
  return (
    <div className={styles.assinatura}>
      <section className={styles.oval2Parent}>
        <div className={styles.oval2} />
        <div className={styles.mainContent}>
          <div className={styles.loginFormContainer}>
            <div className={styles.loginHeader}>
              <h1 className={styles.shieldx}>ShieldX</h1>
              <img
                className={styles.logo21Icon}
                loading="lazy"
                alt=""
                src="/logo2-1@2x.png"
              />
            </div>
            <div className={styles.loginMessage}>
              <div
                className={styles.safegaurdYourData}
              >{`Safegaurd your data `}</div>
            </div>
          </div>
        </div>
        <Container />
      </section>
      <section className={styles.footerGraphics}>
        <div className={styles.oval1} />
        <div className={styles.footerGraphicsChild} />
      </section>
    </div>
  );
};

export default Assinatura;
