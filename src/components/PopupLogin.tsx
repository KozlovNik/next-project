import ButtonClose from "../components/ButtonClose";
import Button from "../components/Button";
import CustomField from "../components/CustomField";
import useError from "../hooks/useError";
import useUser from "../hooks/useUser";

import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import Error from "../components/Error";
import * as Yup from "yup";
import useEscapeKey from "../hooks/useEscapeKey";
import Link from "next/link";

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
            if (router.pathname === "/register") {
              router.push("/");
            }
            handleClick();
          } catch (error) {
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
            <Link href="/register">
              <a className={styles.link} onClick={handleClick}>
                Регистрация
              </a>
            </Link>
            <a className={styles.link}>Восстановить пароль</a>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default PopupLogin;
