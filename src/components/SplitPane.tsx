import { ReactNode } from "react";
import styles from "./SplitPane.module.css";

interface SplitPaneProps {
  handleClick?: () => void;
  label: string | ReactNode;
  classLabelName?: string;
  icon: string | ReactNode;
  className?: string;
}

const SplitPane: React.FC<SplitPaneProps> = ({
  icon,
  label,
  classLabelName,
  handleClick,
  className,
}) => {
  return (
    <div
      className={
        className || (handleClick ? styles.splitPane : styles.splitPaneInactive)
      }
      onClick={handleClick}
    >
      <span>{icon}</span>
      <span
        className={
          classLabelName || (handleClick ? styles.label : styles.labelInactive)
        }
      >
        {label}
      </span>
    </div>
  );
};

export default SplitPane;
