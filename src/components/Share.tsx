import React from "react";
import ShareImg from "./svgs/Share";
import SplitPane from "./SplitPane";

const Share: React.FC = () => (
  <SplitPane icon={<ShareImg />} label="Поделиться" />
);

export default Share;
