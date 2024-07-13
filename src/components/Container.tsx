import { FunctionComponent } from "react";
import styles from "./Container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.container6, className].join(" ")}>
      <div className={styles.safegaurdYourData}>{`Safegaurd your data `}</div>
      <div className={styles.shieldIconContainerWrapper}>
        <div className={styles.shieldIconContainer}>
          <div className={styles.shieldxParent}>
            <h2 className={styles.shieldx}>ShieldX</h2>
            <div className={styles.logoContainer}>
              <img
                className={styles.logo23Icon}
                loading="lazy"
                alt=""
                src="/logo2-2@2x.png"
              />
            </div>
          </div>
          <div className={styles.shieldIconContainerInner}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-6.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.home1Wrapper}>
          <img
            className={styles.home1Icon}
            loading="lazy"
            alt=""
            src="/home-1.svg"
          />
        </div>
        <b className={styles.homepage}>HomePage</b>
      </div>
      <div className={styles.dataActions}>
        <div className={styles.dataUpload1Parent}>
          <img
            className={styles.dataUpload1}
            loading="lazy"
            alt=""
            src="/data-upload-1.svg"
          />
          <b className={styles.dataUpload}>Data Upload</b>
        </div>
        <div className={styles.analysisButtonWrapper}>
          <div className={styles.analysisButton}>
            <img
              className={styles.gChart1}
              loading="lazy"
              alt=""
              src="/g-chart-1.svg"
            />
            <b className={styles.analyse}>Analyse</b>
          </div>
        </div>
      </div>
      <div className={styles.userActions}>
        <div className={styles.userActionsInner}>
          <div className={styles.profileButtonParent}>
            <div className={styles.profileButton}>
              <div className={styles.profileIconContainer}>
                <img
                  className={styles.profile1Icon}
                  loading="lazy"
                  alt=""
                  src="/profile-1.svg"
                />
              </div>
              <b className={styles.profile}>Profile</b>
            </div>
            <div className={styles.historyButtonParent}>
              <div className={styles.historyButton}>
                <img
                  className={styles.timeMachine1}
                  loading="lazy"
                  alt=""
                  src="/time-machine-1.svg"
                />
              </div>
              <b className={styles.history}>History</b>
            </div>
          </div>
        </div>
        <div className={styles.avatar1674}>
          <div className={styles.rectangle} />
        </div>
      </div>
      <div className={styles.backgroundShape} />
    </div>
  );
};

export default Container;
