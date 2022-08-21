import { Form, Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useState } from "react";
import useError from "../hooks/useError";

import { Error } from "./Error";
import { TextField } from "./Fields";
import { Button } from "./ui/Button";
import { screen } from "./system/primitives";

import fetcher from "../lib/fetchJson";
import { Text } from "./system/Text";

const reqText = "Поле не может быть пустым";

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${screen("sm")} {
    width: 250px;
  }
`;

export const RegisterForm = () => {
  const [error, setError] = useError();
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      validationSchema={Yup.object({
        firstName: Yup.string().required(reqText),
        lastName: Yup.string().required(reqText),
        email: Yup.string().email("Некорректный email адрес").required(reqText),
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
        setLoading(true);
        try {
          await fetcher("/api/register", {
            method: "post",
            body: JSON.stringify(rest),
          });
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ isValid, dirty }) => (
        <>
          <Text preset="h1Thin" color="black-2" mb="m">
            РЕГИСТРАЦИЯ
          </Text>
          <StyledForm>
            <TextField name="firstName" label="Имя" />
            <TextField name="lastName" label="Фамилия" />
            <TextField name="email" label="Email" />
            <TextField name="phone" label="Номер телефона" />
            <TextField name="address" label="Адрес" />
            <TextField name="password" type="password" label="Пароль" />
            <TextField
              name="password2"
              type="password"
              label="Повторите пароль"
            />
            <Error>{error}</Error>
            <Button type="submit" disabled={!isValid || !dirty || loading}>
              Зарегистрироваться
            </Button>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};
