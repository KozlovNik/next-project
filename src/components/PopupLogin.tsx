import ButtonClose from "../components/ButtonClose";
import Button from "../components/Button";
import CustomField from "../components/CustomField";

import { Form, Formik } from "formik";
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
  return close ? null : (
    <>
      <div className={styles.shadow} onClick={handleClick} />
      <Formik
        validationSchema={Yup.object({
          email: Yup.string(),
          password: Yup.string(),
        })}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
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
          <CustomField name="password" placeholder="Пароль" />
          <Button type="submit" style={{ width: "100%" }} onClick={handleClick}>
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
