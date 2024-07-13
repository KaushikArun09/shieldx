import { FunctionComponent } from "react";
import styles from "./UploadContent.module.css";

export type UploadContentType = {
  className?: string;
};

const UploadContent: FunctionComponent<UploadContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.uploadContent, className].join(" ")}>
      <div className={styles.uploadArea} />
      <div className={styles.uploadActions}>
        <div className={styles.uploadButtonContainer}>
          <div className={styles.button39}>
            <h2 className={styles.upload}>Upload</h2>
          </div>
        </div>
        <div className={styles.dataVisualization}>
          <div className={styles.dataPreview}>
            <div className={styles.dataContainer}>
              <div className={styles.dataPoints} />
              <div className={styles.dataPoints1} />
            </div>
            <div className={styles.containerBackground} />
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.chartElements}>
              <div className={styles.chartPoint} />
              <div className={styles.chartValue} />
            </div>
            <div className={styles.chartElements1}>
              <div className={styles.rectangle} />
              <div className={styles.rectangle1} />
            </div>
          </div>
          <div className={styles.chartLegend}>
            <div className={styles.legendItem} />
            <div className={styles.legendItem1} />
          </div>
        </div>
      </div>
      <div className={styles.chartFooter}>
        <div className={styles.footerContent} />
        <div className={styles.footerContent1} />
      </div>
    </section>
  );
};

export default UploadContent;
