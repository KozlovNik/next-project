import { useState } from "react";
import SplitPane from "./SplitPane";
import Heart from "../components/svgs/Heart";

interface StarredProps {
  classLabelName?: string;
  className?: string;
}

const Starred: React.FC<StarredProps> = (props) => {
  const [color, setColor] = useState("#fff");

  return (
    <SplitPane
      {...props}
      label={
        color === "#D66565" ? "Удалить из закладок" : "Добавить в закладки"
      }
      icon={<Heart color={color} />}
      handleClick={() => {
        setColor((color) => (color === "#D66565" ? "#fff" : "#D66565"));
      }}
    />
  );
};

export default Starred;
