/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Link from "next/link";
import { DialogOverlay } from "@reach/dialog";
import ButtonClose from "./ButtonClose";
import Button from "./Button";
import CustomField from "./CustomField";
import useError from "../hooks/useError";
import useUser from "../hooks/useUser";
import "@reach/dialog/styles.css";

import Error from "./Error";

import styles from "./PopupLogin.module.css";

interface PopupLoginProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const PopupLogin: React.FC<PopupLoginProps> = ({ isOpen, onDismiss }) => {
  const router = useRouter();

  const { login } = useUser();
  const [error, setError] = useError();
  // background-color: rgba(0, 0, 0, 0.95);

  return (
    <DialogOverlay
      dangerouslyBypassScrollLock
      allowPinchZoom
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <div className={styles.shadow}>
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
              // handleClick();
            } catch (e) {
              setError("Неверный логин или пароль");
            }
          }}
        >
          <Form className={styles.form}>
            <ButtonClose
              color="#B6B6B6"
              className={styles.button}
              // onClick={handleClick}
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
      </div>
    </DialogOverlay>
  );
};

export default PopupLogin;
