import Button from "../components/Button";
import Input from "../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short").max(20, "Too long").required(),
});

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
    },
    validationSchema: LoginSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        className="mb-4"
      />
      <Input
        type="password"
        label="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        className="mb-4"
      />
      <Button type="submit" disabled={!formik.isValid} className="mb-4">
        Log In
      </Button>
      <div className="font-extrabold text-xs leading-none underline cursor-pointer font-lato">
        Forgot Password
      </div>
    </form>
  );
}

export default LoginForm;
