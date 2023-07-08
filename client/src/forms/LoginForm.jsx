import Button from "../components/Button";
import Input from "../components/Input";
import { useFormik} from 'formik'
function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: () => {
            console.log(formik.values)
        }
    })
    return ( 
        <form>
            <Input label="Email" />
            <Button />
        </form>
     );
}

export default LoginForm;