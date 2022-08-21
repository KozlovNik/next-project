import { Text } from "./system/Text";

interface ErrorProps {
  children: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children }) => (
  <Text preset="paragraph2" color="red" my="xs">
    {children}
  </Text>
);
