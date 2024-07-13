import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./Container1.module.css";

export type Container1Type = {
  className?: string;
};

const Container1: FunctionComponent<Container1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.container19, className].join(" ")}>
      <div className={styles.editProfileHeader}>
        <h1 className={styles.profile}>Profile</h1>
      </div>
      <div className={styles.fullNameContainerParent}>
        <Form className={styles.fullNameContainer}>
          <Form.Control type="text" />
        </Form>
        <div className={styles.usernameContainer}>
          <div className={styles.usernameParent}>
            <b className={styles.username}>Username</b>
            <div className={styles.textfield}>
              <div className={styles.yourUsername}>Your username</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.accountDetails}>
        <div className={styles.accountInfo}>
          <h1 className={styles.account}>Account</h1>
          <div className={styles.credentials}>
            <div className={styles.emailContainer}>
              <div className={styles.emailParent}>
                <b className={styles.email}>Email</b>
                <Form className={styles.textfield1}>
                  <Form.Control type="text" />
                </Form>
              </div>
            </div>
            <Form className={styles.passwordContainer}>
              <Form.Control type="text" />
            </Form>
          </div>
          <div className={styles.saveButtonContainer}>
            <Button className={styles.button9} variant="outline-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container1;
