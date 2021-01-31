import useError from "../hooks/useError";
import { Form, Formik } from "formik";
import CustomField from "../components/CustomField";
import Layout from "../components/Layout";
import Button from "../components/Button";
import * as Yup from "yup";
import withSession from "../lib/session";
import Error from "../components/Error";

import styles from "../styles/Register.module.css";
import Router from "next/router";

const reqText = "Поле не может быть пустым";

interface RegisterProps {
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
}

const Register: React.FC<RegisterProps> = () => {
  const [error, setError] = useError();
  return (
    <Layout>
      <Formik
        validationSchema={Yup.object({
          firstName: Yup.string().required(reqText),
          lastName: Yup.string().required(reqText),
          email: Yup.string()
            .email("Некорректный email адрес")
            .required(reqText),
          phone: Yup.string().required(reqText),
          address: Yup.string().required(reqText),
          password: Yup.string()
            .required(reqText)
            .min(6, "Пароль должен быть не менее 6 символов"),
          password2: Yup.string()
            .required(reqText)
            .min(6, "Пароль должен быть не менее 6 символов")
            .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
        })}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          password: "",
          password2: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          const { password2, ...rest } = values;
          const res = await fetch("api/register", {
            method: "POST",
            body: JSON.stringify(rest),
          });
          if (res.ok) {
            Router.push("/");
          } else if (res.status === 409) {
            setError("Пользователь с таким email уже существует");
          } else {
            setError("Ошибка, попробуйте снова");
          }
        }}
      >
        <>
          <h1 className="heading">РЕГИСТРАЦИЯ</h1>
          <Form className={styles.form}>
            <CustomField name="firstName" label="Имя" />
            <CustomField name="lastName" label="Фамилия" />
            <CustomField name="email" label="Email" />
            <CustomField name="phone" label="Номер телефона" />
            <CustomField name="address" label="Адрес" />
            <CustomField name="password" type="password" label="Пароль" />
            <CustomField
              name="password2"
              type="password"
              label="Повторите пароль"
            />
            <Error>{error}</Error>
            <Button type="submit" style={{ width: "100%" }}>
              Зарегистрироваться
            </Button>
          </Form>
        </>
      </Formik>
    </Layout>
  );
};

export default Register;

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get("user");
  if (user) {
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
    return { props: { user: req.session.get("user") } };
  }

  return {
    props: {},
  };
});
