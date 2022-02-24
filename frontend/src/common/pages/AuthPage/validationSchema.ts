import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string().email("Email seems to be invalid").required(""),
  password: Yup.string().min(8, "Minimum 8 characters").max(32, ""),
  repeatPassword: Yup.string()
    .min(8, "")
    .max(32, "")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email seems to be invalid").required(""),
  password: Yup.string().min(8, "Minimum 8 characters").max(32, ""),
});
