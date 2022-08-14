/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Link from "next/link";
import { ButtonClose } from "./ButtonClose";
import Button from "./Button";
import CustomField from "./CustomField";
import useError from "../hooks/useError";
import useUser from "../hooks/useUser";
import "@reach/dialog/styles.css";

import Error from "./Error";

import styles from "./PopupLogin.module.css";
import { Modal } from "../shared/Modal";
import { Text } from "../shared/system/Text";

interface PopupLoginProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const PopupLogin: React.FC<PopupLoginProps> = ({ isOpen, onDismiss }) => {
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
              router.pathname === "/register" ||
              router.pathname === "/forgot" ||
              router.pathname.includes("/reset/")
            ) {
              router.push("/");
            }
          } catch (e) {
            setError("Неверный логин или пароль");
          }
        }}
      >
        <Form>
          <ButtonClose
            color="#B6B6B6"
            className={styles.button}
            onClick={onDismiss}
          />
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
          <div className={styles.links}>
            <Link href="/register" passHref>
              <a
                className={styles.link}
                // onClick={handleClick}
              >
                Регистрация
              </a>
            </Link>
            <Link href="/forgot" passHref>
              <a className={styles.link}>Восстановить пароль</a>
            </Link>
          </div>
        </Form>
      </Formik>
      {/* </div> */}
    </Modal>
  );
};

export default PopupLogin;
