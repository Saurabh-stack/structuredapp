import * as yup from "yup";

const passwordRules = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
export const loginSchema = yup.object().shape({
  inUserName: yup
    .string()
    .email("Pleaes enter valid email")
    .required("Email required"),
  inPassword: yup
    .string()
    .matches(passwordRules, {
      message:
        "Password must include lowercase, uppercase, number, symbol and 8 to 16 char long",
    })
    .required("Password required"),
});
