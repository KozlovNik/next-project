import React from "react";
import { Form, Formik, useField } from "formik";
import Button from "../components/Button";
import * as Yup from "yup";

import styles from "../styles/Register.module.css";

interface CustomFieldProps {
  label: string;
  type?: "text" | "password" | "number";
  name: string;
  placeholder?: string;
}

const CustomField: React.FC<CustomFieldProps> = ({
  label,
  type = "text",
  ...props
}) => {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <label className={styles.label}>
      <div className={styles.labelText}>
        {label} <span className={styles.star}>*</span>
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
      <input className={styles.input} type={type} {...field} {...props} />
    </label>
  );
};

const RegisterForm = () => {
  const reqText = "Поле не может быть пустым";
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
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <>
        <h1 className="heading">РЕГИСТРАЦИЯ</h1>
        <Form className={styles.form}>
          <CustomField name="firstName" label="Имя" />
          <CustomField name="lastName" label="Фамилия" />
          <CustomField name="email" label="Email" />
          <CustomField name="phone" label="Номер телефона" />
          <CustomField name="password" type="password" label="Пароль" />
          <CustomField
            name="password2"
            type="password"
            label="Повторите пароль"
          />
          <Button type="submit" style={{ width: "100%" }}>
            Зарегистрироваться
          </Button>
        </Form>
      </>
    </Formik>
  );
};

export default RegisterForm;
