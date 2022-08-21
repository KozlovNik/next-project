import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import useError from "../hooks/useError";
import { TextField } from "../shared/Fields";
import Layout from "../components/Layout";
import Button from "../components/Button";
import withSession from "../lib/session";
import { Error } from "../shared/Error";
import { UserContextTypes } from "../lib/userContext";
import {
  getCategories,
  GetCategoriesTypes,
  getUser,
} from "../lib/dataFunctions";
import fetcher from "../lib/fetchJson";
import { screen } from "../shared/system/primitives";
import { Text } from "../shared/system/Text";
import { INDEX_PAGE } from "../shared/constants/routes";

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${screen("sm")} {
    width: 250px;
  }
`;

interface ForgotProps {
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
}

const Forgot: React.FC<ForgotProps> = ({ user, categories }) => {
  const [error, setError] = useError();
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  return (
    <Layout user={user} categories={categories}>
      <Text preset="h1Thin" color="black-2" mb="m">
        ВОССТАНОВЛЕНИЕ ПАРОЛЯ
      </Text>
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
            setLoading(true);
            try {
              await fetcher("/api/forgot", {
                method: "POST",
                body: JSON.stringify(values),
              });
              setShowForm(false);
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ dirty, isValid }) => (
            <StyledForm>
              <TextField name="email" label="Email" />
              <Error>{error}</Error>
              <Button type="submit" disabled={!dirty || !isValid || loading}>
                Восстановить пароль
              </Button>
            </StyledForm>
          )}
        </Formik>
      ) : (
        <Text>Мы выслали письмо на указанную вами почту</Text>
      )}
    </Layout>
  );
};

export default Forgot;

export const getServerSideProps = withSession(async ({ req }) => {
  if (getUser(req)) {
    return {
      redirect: {
        destination: INDEX_PAGE,
        permanent: false,
      },
    };
  }

  const categories = await getCategories();

  return {
    props: { categories },
  };
});
