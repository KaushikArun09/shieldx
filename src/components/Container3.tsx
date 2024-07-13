import { FunctionComponent } from "react";
import styles from "./Container3.module.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <form className={[styles.container2, className].join(" ")}>
      <div className={styles.signupTitle}>
        <h3 className={styles.createAnAccount}>Create an account</h3>
      </div>
      <div className={styles.socialLogin}>
        <div className={styles.socialButtons}>
          <div className={styles.button3}>
            <div className={styles.facebookButtonContainer}>
              <div className={styles.facebookLogo} />
            </div>
            <img className={styles.googleIcon} alt="" src="/google.svg" />
          </div>
          <div className={styles.button2}>
            <div className={styles.logoFacebookWrapper}>
              <img
                className={styles.logoFacebookIcon}
                alt=""
                src="/logo-facebook.svg"
              />
            </div>
            <div className={styles.text} />
          </div>
        </div>
      </div>
      <div className={styles.nameInput}>
        <div className={styles.nameField}>
          <b className={styles.fullName}>Full name</b>
          <div className={styles.textfield}>
            <div className={styles.johnDoe}>John Doe</div>
          </div>
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.emailField}>
          <b className={styles.email}>Email</b>
          <div className={styles.textfield1}>
            <div className={styles.exampleemailgmailcom}>
              example.email@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className={styles.passwordInput}>
        <div className={styles.passwordField}>
          <b className={styles.password}>Password</b>
          <div className={styles.textfield2}>
            <div
              className={styles.enterAtLeast}
            >{`Enter at least 8+ characters `}</div>
            <div className={styles.passwordVisibility}>
              <img className={styles.hideIcon} alt="" src="/hide.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.submitButton}>
        <div className={styles.button1}>
          <div className={styles.signUp}>Sign up</div>
        </div>
      </div>
      <div className={styles.existingUser}>
        <div className={styles.loginOption}>
          <div className={styles.beenHereBefore}>Been here before?</div>
          <div className={styles.logIn}>Log in</div>
        </div>
      </div>
    </form>
  );
};

export default Container;
