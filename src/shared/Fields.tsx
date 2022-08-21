import { useField } from "formik";
import styled from "styled-components";
import { Box } from "./system/Box";
import { Text } from "./system/Text";

interface CustomFieldProps {
  label?: string;
  type?: "text" | "password" | "number";
  name: string;
  placeholder?: string;
}

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--colors-black-4);
  height: 35px;
  border-radius: 5px;
  padding: var(--spacings-xxs) var(--spacings-xs);
`;

export const TextField: React.FC<CustomFieldProps> = ({
  label,
  type = "text",
  placeholder,
  ...props
}) => {
  const [field, meta] = useField({ ...props, type });
  return (
    <Box color="black-2" mb="s" width="100%" as="label" display="block">
      {label && (
        <Text preset="caption">
          {label}{" "}
          <Box as="span" color="red">
            *
          </Box>
        </Text>
      )}
      {meta.touched && meta.error && (
        <Text preset="caption" color="red" mt="xxs">
          {meta.error}
        </Text>
      )}
      <Input placeholder={placeholder} type={type} {...props} {...field} />
    </Box>
  );
};
