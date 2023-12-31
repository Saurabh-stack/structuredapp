import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button.component";
import { BtnSignIn } from "../../constants";
import { useFormik } from "formik";
import { loginSchema } from "./schema";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    inEmail: "",
    inPassword: "",
  };
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    validateOnChange: true,
    validateOnBlur: false,
    isInitialValid: false,
    onSubmit: (values, action) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
      navigate("/dashboard");
    },
  });

  return (
    <form onSubmit={handleSubmit} className="py-0 pl-0 flex-grow">
      <TextInput
        type="email"
        name="inEmail"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errorMessage={errors.inEmail && touched.inEmail ? errors.inEmail : ""}
      />
      <TextInput
        type="password"
        name="inPassword"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errorMessage={
          errors.inPassword && touched.inPassword ? errors.inPassword : ""
        }
      />
      <Button disable={!isValid} isSubmitting={isSubmitting}>
        {BtnSignIn}
      </Button>
    </form>
  );
};

export default Login;
