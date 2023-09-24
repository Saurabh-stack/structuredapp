import * as Yup from "yup";

const passwordRules = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

export const loginSchema = Yup.object().shape({
  inEmail: Yup.string()
    .email("Pleaes enter valid email")
    .required("Email required"),
  inPassword: Yup.string()
    .matches(passwordRules, {
      message:
        "Password must include lowercase, uppercase, number, symbol and 8 to 16 char long",
    })
    .required("Password required"),
});

export const signUpSchema = Yup.object().shape({
  inEmail: Yup.string()
    .email("Pleaes enter valid email")
    .required("Email required"),
  inPassword: Yup.string()
    .matches(passwordRules, {
      message:
        "Password must include lowercase, uppercase, number, symbol and 8 to 16 char long",
    })
    .required("Password required"),
  inConfirmPassword: Yup.string()
    .oneOf([Yup.ref("inPassword"), null], "Passwords must match")
    .required("Required"),
  inFullName: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  //inRole: Yup.string().required("Please select a role"),
});
