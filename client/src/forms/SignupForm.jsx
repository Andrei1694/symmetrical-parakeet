import Button from "../components/Button";
import Input from "../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserStore } from "../store/user";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short").max(20, "Too long").required(),
});

export default function SignupForm() {
  const registerUser = useUserStore((state) => state.registerUser);
  const loading = useUserStore((state) => state.loading);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      const { email, password } = formik.values;
      await registerUser(email, password);
    },
    validationSchema: SignupSchema,
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
        {loading ? "Loading" : "Get Started"}
      </Button>
    </form>
  );
}
