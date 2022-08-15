import { Form, Formik } from "formik";
import styled from "styled-components";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Link from "next/link";
import { CloseButton } from "../components/CloseButton";
import Button from "../components/Button";
import CustomField from "../components/CustomField";
import useError from "../hooks/useError";
import useUser from "../hooks/useUser";
import { Modal } from "./Modal";
import { Text } from "./system/Text";
import {
  INDEX_PAGE,
  REGISTER_PAGE,
  RESET_PASSWORD_PAGE,
  RESTORE_PASSWORD_PAGE,
} from "./constants/routes";
import { Flex } from "./system/Box";

import Error from "../components/Error";

import "@reach/dialog/styles.css";

interface PopupLoginProps {
  isOpen: boolean;
  onDismiss: () => void;
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

export const LoginModal: React.FC<PopupLoginProps> = ({
  isOpen,
  onDismiss,
}) => {
  const router = useRouter();

  const { login } = useUser();
  const [error, setError] = useError();

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Formik
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Укажите ваш email")
            .email("Неверный формат email"),
          password: Yup.string().required("Укажите ваш пароль"),
        })}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);

          try {
            await login(values);
            if (
              router.pathname === REGISTER_PAGE ||
              router.pathname === RESTORE_PASSWORD_PAGE ||
              router.pathname.includes(`${RESET_PASSWORD_PAGE}/`)
            ) {
              router.push(INDEX_PAGE);
            }
          } catch (e) {
            setError("Неверный логин или пароль");
          }
        }}
      >
        <Form>
          <CloseButton ml="auto" onClick={onDismiss} />
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
          <Button type="submit">Войти</Button>
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
      </Formik>
    </Modal>
  );
};
