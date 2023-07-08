import Button from "../components/Button";
import Input from "../components/Input";
import { useFormik } from "formik";
function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input label="Email" onChange={formik.onChange} />
      <Input type="password" label="Password" onChange={formik.onChange} />
      <Button>Get Started</Button>
    </form>
  );
}

export default LoginForm;
