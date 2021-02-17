import { useState } from "react";
import { getProductDataTypes } from "../../lib/dataFunctions";

interface WithSliderHandlersProps {
  numberToShow: number;
  totalImageNumber: number;
  productData?: getProductDataTypes;
}

export interface SliderProps {
  goForward: () => void;
  goBackward: () => void;
  style: {
    transform: string;
  };
  counter: number;
  productData?: getProductDataTypes;
}

const WithSliderHandlers = (WrapperComponent: React.FC<SliderProps>) => (
  props: WithSliderHandlersProps
) => {
  const { numberToShow, totalImageNumber } = props;
  const maxVal = totalImageNumber - numberToShow;
  const [counter, setCounter] = useState(0);

  const goBackward = () =>
    setCounter((count) => (count < 1 ? count : count - 1));

  const goForward = () =>
    setCounter((count) => (count >= maxVal ? count : count + 1));

  const style = { transform: `translateX(${-counter * 100}%)` };
  return (
    <WrapperComponent
      {...props}
      goForward={goForward}
      goBackward={goBackward}
      style={style}
      counter={counter}
    />
  );
};

export default WithSliderHandlers;
