import { useRef } from "react";

import Popup from "reactjs-popup";

interface PopupProductFilterPropTypes {
  trigger: (isOpen: boolean) => JSX.Element;
  children: (close?: () => void) => JSX.Element;
}

const PopupProductFilter: React.FC<PopupProductFilterPropTypes> = ({
  trigger,
  children,
}) => {
  const ref = useRef<any>();
  let close;
  if (ref) {
    close = () => ref.current.close();
  }
  return (
    <Popup
      ref={ref}
      trigger={trigger}
      position="bottom left"
      closeOnDocumentClick
    >
      {children(close)}
    </Popup>
  );
};

export default PopupProductFilter;
