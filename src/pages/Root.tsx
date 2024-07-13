import { FunctionComponent } from "react";
import Container from "../components/Container";
import UploadContent from "../components/UploadContent";
import FrameComponent from "../components/FrameComponent";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <main className={styles.dataDisplay}>
        <div className={styles.dataPoint}>
          <Container />
        </div>
        <div className={styles.contentBackground} />
        <UploadContent />
      </main>
      <FrameComponent />
    </div>
  );
};

export default Root;
