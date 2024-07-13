import { FunctionComponent } from "react";
import Container2 from "../components/Container2";
import Container1 from "../components/Container1";
import styles from "./Root1.module.css";

const Root1: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Container2 />
      <main className={styles.content}>
        <div className={styles.profileContainer}>
          <div className={styles.profileHeader}>
            <div className={styles.profileInfo}>
              <h1 className={styles.profile}>Profile</h1>
            </div>
            <div className={styles.container17}>
              <div className={styles.profileImageContainer}>
                <div className={styles.imageParent}>
                  <img className={styles.imageIcon} alt="" src="/image.svg" />
                  <img
                    className={styles.container18Icon}
                    loading="lazy"
                    alt=""
                    src="/container-18.svg"
                  />
                </div>
              </div>
              <div className={styles.professionalInfo}>
                <div className={styles.titleContainer}>
                  <div className={styles.professionalTitleWrapper}>
                    <div className={styles.professionalTitle}>
                      Professional title
                    </div>
                  </div>
                  <h3 className={styles.dedsec}>Dedsec</h3>
                </div>
              </div>
              <div className={styles.contactContainer}>
                <div className={styles.contactNumber91}>
                  Contact number: +91 8970022495
                </div>
              </div>
              <div className={styles.profileLinkContainer}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/line-4.svg"
                  />
                  <div className={styles.profileLinkWrapper}>
                    <b className={styles.profileLink}>Profile link</b>
                  </div>
                </div>
              </div>
              <div className={styles.linkInputContainer}>
                <div className={styles.textfield}>
                  <div className={styles.httpswwwprofilelinkcom}>
                    https://www.profilelink.com
                  </div>
                  <div className={styles.copyButtonContainer}>
                    <img
                      className={styles.copy2Icon}
                      loading="lazy"
                      alt=""
                      src="/copy-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container1 />
      </main>
    </div>
  );
};

export default Root1;
