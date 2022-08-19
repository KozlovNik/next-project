import { Form, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import Link from "next/link";
import { CloseButton } from "../components/CloseButton";
import Button from "../components/Button";
import CustomField from "../components/CustomField";
import { Text } from "./system/Text";
import { REGISTER_PAGE, RESTORE_PASSWORD_PAGE } from "./constants/routes";
import { Flex } from "./system/Box";
import Error from "../components/Error";

import "@reach/dialog/styles.css";

interface PopupLoginProps {
  onDismiss: () => void;
  login: (values) => void;
  loading: boolean;
  error?: string;
}

// TODO: make exportable component
const Anchor = styled(Text).attrs({
  as: "a",
  preset: "paragraph1Thin",
  cursor: "pointer",
  mb: "xs",
})`
  color: var(--colors-black-3);
  text-decoration: underline dotted var(--colors-black-4);
  text-decoration-thickness: 1px;

  :hover {
    color: var(--colors-red-2);
    text-decoration: underline dotted var(--colors-red-2);
    text-decoration-thickness: 1px;
  }
`;

export const LoginForm: React.FC<PopupLoginProps> = ({
  onDismiss,
  login,
  loading,
  error,
}) => (
  <Formik
    validationSchema={Yup.object({
      email: Yup.string()
        .required("Укажите ваш email")
        .email("Неверный формат email"),
      password: Yup.string().required("Укажите ваш пароль"),
    })}
    initialValues={{}}
    onSubmit={async (values, { setSubmitting }) => {
      setSubmitting(false);
      await login(values);
    }}
  >
    <>
      <CloseButton css="margin-left: auto" onClick={onDismiss} />
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <Text
          preset={{ _: "h2Light", xs: "h1Light" }}
          textAlign="center"
          my="s"
          color="black-2"
        >
          АВТОРИЗАЦИЯ
        </Text>
        <CustomField name="email" placeholder="Email" />
        <CustomField name="password" type="password" placeholder="Пароль" />
        <Error>{error}</Error>
        <Button type="submit" disabled={loading}>
          Войти
        </Button>
        <Flex
          justifyContent="space-around"
          mt="m"
          flexWrap="wrap"
          flexDirection={{ _: "column", xs: "row" }}
          alignItems="center"
        >
          <Link href={REGISTER_PAGE} passHref>
            <Anchor>Регистрация</Anchor>
          </Link>
          <Link href={RESTORE_PASSWORD_PAGE} passHref>
            <Anchor>Восстановить пароль</Anchor>
          </Link>
        </Flex>
      </Form>
    </>
  </Formik>
);
