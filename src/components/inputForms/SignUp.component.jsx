import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button.component";
import { BtnSignIn } from "../../constants";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import SelectBox from "../atoms/SelectBox";
const SignUp = () => {
  const initialValues = {
    inFullName: "",
    inEmail: "",
    inPassword: "",
    inConfirmPassword: "",
    inRole: "",
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
    validationSchema: signUpSchema,
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
    <form onSubmit={handleSubmit} className="py-0 pl-0 flex-grow">
      <TextInput
        type="text"
        name="inFullName"
        placeholder="Full Name"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errorMessage={
          errors.inFullName && touched.inFullName ? errors.inFullName : ""
        }
      />
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
      <TextInput
        type="password"
        name="inConfirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errorMessage={
          errors.inConfirmPassword && touched.inConfirmPassword
            ? errors.inConfirmPassword
            : ""
        }
      />
      <SelectBox
        name={"inRole"}
        onChange={handleChange}
        onBlur={handleBlur}
        id={"inRole"}
      >
        <option value="User">User</option>
        <option value="Manager">Manager</option>
        <option value="BU HR">BU HR</option>
        <option value="DeptHead">Departmental Head</option>
      </SelectBox>

      <Button disable={!isValid} isSubmitting={isSubmitting}>
        {BtnSignIn}
      </Button>
    </form>
  );
};

export default SignUp;
