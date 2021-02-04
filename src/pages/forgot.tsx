import useError from "../hooks/useError";
import { Form, Formik } from "formik";
import CustomField from "../components/CustomField";
import Layout from "../components/Layout";
import Button from "../components/Button";
import withSession from "../lib/session";
import Error from "../components/Error";

import fetchJson from "../lib/fetchJson";

import styles from "../styles/Forgot.module.css";

interface RecoverPassword {
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
}

const Forgot: React.FC<RecoverPassword> = ({ user }) => {
  const [error, setError] = useError();
  return (
    <Layout>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          try {
            await fetchJson("/api/forgot", {
              method: "POST",
              body: JSON.stringify(values),
            });
          } catch (err) {
            if (err.response.status === 404) {
              setError("Пользователь с таким email не существует");
            } else {
              setError("Ошибка, попробуйте снова");
            }
          }
        }}
      >
        <>
          <h1 className="heading">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>
          <Form className={styles.form}>
            <CustomField name="email" label="Email" />
            <Error>{error}</Error>
            <Button type="submit" style={{ width: "100%" }}>
              Восстановить пароль
            </Button>
          </Form>
        </>
      </Formik>
    </Layout>
  );
};

export default Forgot;

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get("user");
  if (user) {
    return { props: { user: req.session.get("user") } };
  }
  return {
    props: {},
  };
});
