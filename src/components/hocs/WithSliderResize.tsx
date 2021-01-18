import React, { useEffect, useState } from "react";
// import { WithSliderHandlersProps } from "./WithSliderHandlers";

const WithSliderResize = (Component: React.FC<any>) => () => {

  const [numberToShow, setNumberToShow] = useState(4);

  if (typeof window !== "undefined") {
    const setWidth = () => {
      document.body.classList.add("no-transition");
      setTimeout(() => document.body.classList.remove("no-transition"), 100);

      const width = window.innerWidth;
      if (width >= 1000) {
        setNumberToShow(4);
      } else if (width < 1000 && width >= 750) {
        setNumberToShow(3);
      } else if (width < 750 && width > 0) {
        setNumberToShow(1);
      }
    };

    useEffect(() => {
      setWidth();
    }, []);

    useEffect(() => {
      window.addEventListener("resize", setWidth);
      return () => {
        window.removeEventListener("resize", setWidth);
      };
    }, [window.innerWidth]);
  }
  return <Component numberToShow={3} totalImageNumber={7} />;
};

export default WithSliderResize;
