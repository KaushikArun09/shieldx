import { FunctionComponent } from "react";
import styles from "./Page.module.css";

const Page: FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <div className={styles.featuresContainer}>
        <div className={styles.feature}>
          <div className={styles.feature1}>
            <div className={styles.feature2}>
              <h1 className={styles.shieldx}>ShieldX</h1>
              <img
                className={styles.logo22Icon}
                loading="lazy"
                alt=""
                src="/logo2-2@2x.png"
              />
            </div>
            <div
              className={styles.safegaurdYourData}
            >{`Safegaurd your data `}</div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button9}>
              <div className={styles.letsGo}>Lets Go</div>
            </div>
          </div>
        </div>
      </div>
      <blockquote className={styles.shieldxIs}>
        " ShieldX is a cutting-edge web application engineered to detect and
        mitigate threats to your data. Our platform uses sophisticated data
        analysis techniques and machine learning models to scan for potential
        security risks and vulnerabilities. We provide real-time threat
        detection and actionable insights to help you protect your digital
        assets. Our mission is to deliver powerful, reliable, and scalable
        security solutions that keep your data safe from ever-evolving threats.
        Trust [Your App Name] to fortify your defenses and maintain the
        integrity of your information. "
      </blockquote>
    </div>
  );
};

export default Page;
