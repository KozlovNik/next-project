import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import useError from "../hooks/useError";
import CustomField from "../components/CustomField";
import Layout from "../components/Layout";
import Button from "../components/Button";
import withSession from "../lib/session";
import Error from "../components/Error";
import { UserContextTypes } from "../lib/userContext";
import {
  getCategories,
  GetCategoriesTypes,
  getUser,
} from "../lib/dataFunctions";
import fetchJson from "../lib/fetchJson";

import styles from "../styles/Forgot.module.css";

interface ForgotProps {
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
}

const Forgot: React.FC<ForgotProps> = ({ user, categories }) => {
  const [error, setError] = useError();
  const [showForm, setShowForm] = useState(true);
  return (
    <Layout user={user} categories={categories}>
      <h1 className="heading">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>
      {showForm ? (
        <Formik
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Поле не может быть пустым")
              .email("Неверный формат email"),
          })}
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
              setShowForm(false);
            } catch (err) {
              if (err.response.status === 404) {
                setError("Пользователь с таким email не существует");
              } else {
                setError("Ошибка, попробуйте снова");
              }
            }
          }}
        >
          <Form className={styles.form}>
            <CustomField name="email" label="Email" />
            <Error>{error}</Error>
            <Button type="submit">Восстановить пароль</Button>
          </Form>
        </Formik>
      ) : (
        <p>Мы выслали письмо на указанную вами почту</p>
      )}
    </Layout>
  );
};

export default Forgot;

export const getServerSideProps = withSession(async ({ req }) => {
  if (getUser(req)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const categories = getCategories();
  return {
    props: { categories },
  };
});
