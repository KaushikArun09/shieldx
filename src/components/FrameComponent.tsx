import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.detailContainerWrapper, className].join(" ")}>
      <div className={styles.detailContainer}>
        <div className={styles.detailItems}>
          <div className={styles.detailEntries}>
            <div className={styles.detailEntry} />
          </div>
          <div className={styles.detailEntries1}>
            <div className={styles.rectangle} />
          </div>
          <div className={styles.detailEntries2}>
            <div className={styles.rectangle1} />
          </div>
          <div className={styles.detailsVisualization}>
            <div className={styles.visualizationContainer}>
              <div className={styles.visualizationContent} />
              <div className={styles.visualizationContent1} />
            </div>
          </div>
          <div className={styles.detailsFooter}>
            <div className={styles.footerItems}>
              <div className={styles.footerBackground} />
              <div className={styles.footerAction}>
                <div className={styles.actionButton}>
                  <div className={styles.actionIconContainer}>
                    <div className={styles.actionIcon} />
                  </div>
                  <div className={styles.actionLabel} />
                </div>
              </div>
              <div className={styles.footerSeparator} />
            </div>
            <div className={styles.footerInfo}>
              <div className={styles.infoContainer}>
                <div className={styles.infoBackground} />
              </div>
              <div className={styles.label2}>Label 2</div>
            </div>
            <div className={styles.footerEnd}>
              <div className={styles.endBackground} />
            </div>
          </div>
        </div>
        <div className={styles.detailsHeader}>
          <div className={styles.headerContent}>
            <div className={styles.headerElements} />
            <div className={styles.headerElements1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
