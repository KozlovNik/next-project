/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { SliderProps } from "../SliderSuggestion";
import { GetProductDataTypes } from "../../lib/dataFunctions";

export interface WithSliderHandlersProps {
  numberToShow: number;
  totalImageNumber: number;
  productData?: GetProductDataTypes;
  counter: number;
}

const WithSliderHandlers =
  (WrapperComponent: React.FC<SliderProps>) => (props: any) => {
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
