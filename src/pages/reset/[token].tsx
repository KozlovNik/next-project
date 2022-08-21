import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { useState } from "react";
import useError from "../../hooks/useError";
import { TextField } from "../../shared/Fields";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import withSession from "../../lib/session";
import { Error } from "../../shared/Error";
import fetchJson from "../../lib/fetchJson";
import { getCategories, GetCategoriesTypes } from "../../lib/dataFunctions";
import { Text } from "../../shared/system/Text";
import { INDEX_PAGE } from "../../shared/constants/routes";

const reqText = "Поле не может быть пустым";

interface ResetProps {
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
  categories: GetCategoriesTypes;
}

const Reset: React.FC<ResetProps> = ({ user, categories }) => {
  const [error, setError] = useError();
  const [showForm, setShowForm] = useState(true);
  const router = useRouter();
  return (
    <Layout user={user} categories={categories}>
      <Text preset="h1Thin" color="black-2" mb="m">
        СМЕНА ПАРОЛЯ
      </Text>
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
            try {
              await fetchJson("/api/reset", {
                method: "POST",
                body: JSON.stringify({ password, token: router.query.token }),
              });
            } catch (e) {
              setError(e.message);
            }

            setShowForm(false);
          }}
        >
          {({ isValid, dirty }) => (
            <Form>
              <TextField name="password" type="password" label="Пароль" />
              <TextField
                name="password2"
                type="password"
                label="Повторите пароль"
              />
              <Error>{error}</Error>
              <Button type="submit" disabled={!isValid || !dirty}>
                Сменить пароль
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <Text>Пароль успешно изменен!</Text>
      )}
    </Layout>
  );
};

export default Reset;

export const getServerSideProps = withSession(async ({ req, query }) => {
  const redirect = {
    redirect: {
      destination: INDEX_PAGE,
      permanent: false,
    },
  };

  try {
    jwt.verify(query.token, process.env.JWT_SECRET!);
  } catch (err) {
    return redirect;
  }

  if (req.session.get("user") || !req.cookies.cp) {
    return redirect;
  }

  const categories = await getCategories();

  return {
    props: { categories },
  };
});
