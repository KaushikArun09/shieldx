import { FunctionComponent } from "react";
import styles from "./Container2.module.css";

export type Container2Type = {
  className?: string;
};

const Container2: FunctionComponent<Container2Type> = ({ className = "" }) => {
  return (
    <header className={[styles.container20, className].join(" ")}>
      <div className={styles.shieldx}>ShieldX</div>
      <div className={styles.frame} />
      <div className={styles.leftSidebar}>
        <div className={styles.frameParent}>
          <div className={styles.frame1}>
            <a className={styles.homepage}>HomePage</a>
          </div>
          <div className={styles.frame2}>
            <a className={styles.dataUpload}>Data Upload</a>
            <div className={styles.frame3} />
          </div>
        </div>
        <div className={styles.analyticsWrapper}>
          <a className={styles.analytics}>Analytics</a>
        </div>
      </div>
      <div className={styles.historyParent}>
        <a className={styles.history}>History</a>
        <div className={styles.profileButtonContainer}>
          <a className={styles.profile}>Profile</a>
        </div>
      </div>
    </header>
  );
};

export default Container2;
