import useError from "../../hooks/useError";
import { Form, Formik } from "formik";
import CustomField from "../../components/CustomField";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import * as Yup from "yup";
import withSession from "../../lib/session";
import Error from "../../components/Error";

import { useRouter } from "next/router";

import styles from "../../styles/Reset.module.css";

const reqText = "Поле не может быть пустым";

interface ResetProps {
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
}

const Reset: React.FC<ResetProps> = () => {
  const [error, setError] = useError();
  const router = useRouter();
  console.log(router.query.token);
  return (
    <Layout>
      <Formik
        validationSchema={Yup.object({
          password: Yup.string()
            .required(reqText)
            .min(6, "Пароль должен быть не менее 6 символов"),
          password2: Yup.string()
            .required(reqText)
            .min(6, "Пароль должен быть не менее 6 символов")
            .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
        })}
        initialValues={{
          password: "",
          password2: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          const { password2, ...rest } = values;
          const res = await fetch("api/reset", {
            method: "POST",
            body: JSON.stringify(rest),
          });
        }}
      >
        <>
          <h1 className="heading">СМЕНА ПАРОЛЯ</h1>
          <Form className={styles.form}>
            <CustomField name="password" type="password" label="Пароль" />
            <CustomField
              name="password2"
              type="password"
              label="Повторите пароль"
            />
            <Error>{error}</Error>
            <Button type="submit" style={{ width: "100%" }}>
              Сменить пароль
            </Button>
          </Form>
        </>
      </Formik>
    </Layout>
  );
};

export default Reset;

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get("user");
  if (user) {
    return { props: { user: req.session.get("user") } };
  }

  return {
    props: {},
  };
});
