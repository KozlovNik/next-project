import useError from "../../hooks/useError";
import { Form, Formik } from "formik";
import CustomField from "../../components/CustomField";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import * as Yup from "yup";
import withSession from "../../lib/session";
import Error from "../../components/Error";
import { setCookie } from "../../lib/cookies";

import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

import styles from "../../styles/Reset.module.css";
import fetchJson from "../../lib/fetchJson";
import { useState } from "react";
import { getCategories, getCategoriesTypes } from "../../lib/dataFunctions";

const reqText = "Поле не может быть пустым";

interface ResetProps {
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
  categories: getCategoriesTypes;
}

const Reset: React.FC<ResetProps> = ({ user, categories }) => {
  const [error, setError] = useError();
  const [showForm, setShowForm] = useState(true);
  const router = useRouter();
  return (
    <Layout user={user} categories={categories}>
      <h1 className="heading">СМЕНА ПАРОЛЯ</h1>
      {showForm ? (
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
          onSubmit={async ({ password }, { setSubmitting }) => {
            setSubmitting(false);
            await fetchJson("/api/reset", {
              method: "POST",
              body: JSON.stringify({ password, token: router.query.token }),
            });
            setShowForm(false);
          }}
        >
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
        </Formik>
      ) : (
        <div>Пароль успешно изменен!</div>
      )}
    </Layout>
  );
};

export default Reset;

export const getServerSideProps = withSession(async ({ req, query, res }) => {
  let redirect = {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };

  try {
    jwt.verify(query.token, process.env.JWT_SECRET!);
  } catch (err) {
    return redirect;
  }

  if (req.session.get("user") || !req.cookies["cp"]) {
    return redirect;
  }

  const categories = getCategories();

  return {
    props: { categories },
  };
});
