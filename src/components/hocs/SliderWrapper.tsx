import { useState } from "react";

interface OwnProps {
  numberToShow: number;
  totalImageNumber: number;
}

export interface WithDataComponentProps {
  goForward: () => void;
  goBackward: () => void;
  style: {
    transform: string;
  };
  counter: number;
}

const SliderWrapper = (Component: React.FC<WithDataComponentProps>) => (
  props: OwnProps
) => {
  const { numberToShow, totalImageNumber } = props;
  const maxVal = totalImageNumber - numberToShow
  const [counter, setCounter] = useState(0);

  const goBackward = () =>
    setCounter((count) => (count < 1 ? count : count - 1));

  const goForward = () =>
    setCounter((count) => (count >= maxVal ? count : count + 1));

  const style = { transform: `translateX(${-counter * 100}%)` };
  return (
    <Component
      {...props}
      goForward={goForward}
      goBackward={goBackward}
      style={style}
      counter={counter}
    />
  );
};

export default SliderWrapper;
