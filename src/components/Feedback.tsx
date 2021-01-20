import Stars from "./Stars";
import SplitPane from "./SplitPane";

const Feedback: React.FC = () => {
  return <SplitPane label="Нет отзывов" icon={<Stars />} />;
};

export default Feedback;
