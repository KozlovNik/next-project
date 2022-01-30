import { useContext } from "react";
import { CloseLoginContext } from "../lib/closeLoginContext";

import SplitPane from "./SplitPane";
import Heart from "./svgs/Heart";
import useUser from "../hooks/useUser";

interface StarredProps {
  classLabelName?: string;
  className?: string;
  isStarred: boolean | undefined;
  handleToggleStarred: () => void;
}

const Starred: React.FC<StarredProps> = ({
  isStarred,
  handleToggleStarred,
  ...rest
}) => {
  const { setCloseLogin } = useContext(CloseLoginContext);

  const { user } = useUser();

  const callback = () => {
    if (user && user.isLogged) {
      handleToggleStarred();
    } else {
      setCloseLogin(false);
    }
  };

  return (
    <SplitPane
      {...rest}
      label={isStarred ? "Удалить из закладок" : "Добавить в закладки"}
      icon={<Heart color={isStarred ? "#D66565" : "#fff"} />}
      handleClick={() => callback()}
    />
  );
};

export default Starred;
