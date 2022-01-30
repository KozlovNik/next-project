/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Link from "next/link";
import ButtonClose from "./ButtonClose";
import Button from "./Button";
import CustomField from "./CustomField";
import useError from "../hooks/useError";
import useUser from "../hooks/useUser";

import Error from "./Error";
import useEscapeKey from "../hooks/useEscapeKey";

import styles from "./PopupLogin.module.css";

interface PopupLoginProps {
  close: boolean;
  handleClick: () => void;
}

const PopupLogin: React.FC<PopupLoginProps> = ({ close, handleClick }) => {
  useEscapeKey(handleClick);

  const router = useRouter();

  const { login } = useUser();
  const [error, setError] = useError();

  return close ? null : (
    <>
      <div className={styles.shadow} onClick={handleClick} />
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
            handleClick();
          } catch (e) {
            setError("Неверный логин или пароль");
          }
        }}
      >
        <Form className={styles.form}>
          <ButtonClose
            color="#B6B6B6"
            className={styles.button}
            onClick={handleClick}
          />
          <div className={styles.heading}>АВТОРИЗАЦИЯ</div>
          <CustomField name="email" placeholder="Email" />
          <CustomField name="password" type="password" placeholder="Пароль" />
          <Error>{error}</Error>
          <Button type="submit" style={{ width: "100%" }}>
            Войти
          </Button>
          <div className={styles.links}>
            <Link href="/register" passHref>
              <a className={styles.link} onClick={handleClick}>
                Регистрация
              </a>
            </Link>
            <Link href="/forgot" passHref>
              <a className={styles.link}>Восстановить пароль</a>
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default PopupLogin;
