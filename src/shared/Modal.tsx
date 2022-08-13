import { useRef } from "react";
import styled from "styled-components";
import useClickAway from "react-use/lib/useClickAway";

import { DialogOverlay } from "@reach/dialog";
import { Box } from "./system/Box";

import "@reach/dialog/styles.css";

interface PopupLoginProps {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
}

const ModalOverlay = styled(DialogOverlay).attrs(({ onDismiss }) => ({
  onDismiss: (e) => {
    if (onDismiss && e.key === "Escape") {
      onDismiss(e);
    }
  },
}))`
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal: React.FC<PopupLoginProps> = ({
  isOpen,
  onDismiss,
  children,
}) => {
  const ref = useRef();
  useClickAway(ref, onDismiss);

  return (
    <ModalOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <Box
        minWidth={{ _: "100%", sm: "400px" }}
        minHeight={{ _: "100%", sm: "550px" }}
        bg="white"
        p={{ _: "s", sm: "xl" }}
        borderRadius={{ sm: "5px" }}
        // TODO: move box-shadow to constant maybe
        boxShadow="0 0 12px 0 rgba(0, 0, 0, 0.2)"
        ref={ref}
      >
        {children}
      </Box>
    </ModalOverlay>
  );
};
