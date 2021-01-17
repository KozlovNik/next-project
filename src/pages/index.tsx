import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import MainSlider from "../components/MainSlider";
import CategorySlider from "../components/CategorySlider";
import SuggestionSlider from "../components/SuggestionSlider";

export default function Home() {
  const [numberToShow, setNumberToShow] = useState(4);

  if (typeof window !== "undefined") {
    let resizeTimer: ReturnType<typeof setTimeout>;

    const setWidth = () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 100);
      
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

  return (
    <div className={styles.home}>
      <MainSlider />
      <CategorySlider totalImageNumber={7} numberToShow={3} />
      <SuggestionSlider totalImageNumber={7} numberToShow={numberToShow} />
    </div>
  );
}
