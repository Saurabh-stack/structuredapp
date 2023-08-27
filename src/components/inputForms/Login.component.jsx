import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button.component";
import { BtnSignIn } from "../../constants";
import { useFormik } from "formik";
import { loginSchema } from "./schema";
const Login = () => {
  const initialValues = {
    inUserName: "",
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
    },
  });

  return (
    <div className="flex flex-row justify-center items-center w-screen h-[calc(100vh-100px-2rem-2.5rem)]">
      <div className="flex flex-col md:flex-row -mt-40 lg:-mt-0 divide-gray-400 divide-x-0 w-1/5">
        <form onSubmit={handleSubmit} className="py-0 pl-0 flex-grow">
          <TextInput
            type="email"
            name="inUserName"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errorMessage={
              errors.inUserName && touched.inUserName ? errors.inUserName : ""
            }
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
      </div>
    </div>
  );
};

export default Login;
