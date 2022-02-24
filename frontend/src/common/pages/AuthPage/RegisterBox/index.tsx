import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { registerSchema } from "../validationSchema";
import { ApplicationRoutes } from "config/variables";
import TextInput from "common/components/TextInput";
import Button from "common/components/Button";

const RegisterBox = () => {
  return (
    <div className="flex flex-col items-center shadow-xl h-auto max-h-[50rem] w-[30rem] overflow-auto py-8 px-20">
      <div className="flex flex-col text-center mb-[1.875rem]">
        <h2 className="font-title font-medium text-4xl text-rose-600 mb-4">
          floppoo
        </h2>
        <p>Choose register method</p>
      </div>

      <Button buttonText="Continue with Google">
        {<FcGoogle size={16} />}
      </Button>

      <div className="flex items-center w-full my-4">
        <div className="flex-grow bg bg-gray-300 h-[1px]"></div>
        <div className="flex-grow-0 mx-5 text-gray-400">or</div>
        <div className="flex-grow bg bg-gray-300 h-[1px]"></div>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => alert(values)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
            <TextInput name="email" type="text" placeholder="Email" />
            <TextInput name="password" type="password" placeholder="Password" />
            <TextInput
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
            />
            <Button buttonText="Continue" color="main" />
          </form>
        )}
      </Formik>

      <div className="flex flex-col items-center justify-center mt-[1.875rem]">
        <p className="text-sm">Already have an account?</p>
        <Link
          to={`${ApplicationRoutes.login}`}
          className="text-base text-rose-500"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterBox;
