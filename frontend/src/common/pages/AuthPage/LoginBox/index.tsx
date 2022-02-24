import { Formik } from "formik";
import { registerSchema } from "../validationSchema";
import TextInput from "common/components/TextInput";

const LoginBox = () => {
  return (
    <div className="flex flex-col items-center shadow-xl h-auto max-h-200 overflow-auto py-8 px-20">
      <div className="flex flex-col text-center mb-2">
        <h2 className="font-title font-medium text-4xl text-rose-600">
          floppoo
        </h2>
        <p>Choose login method</p>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => alert(values)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
            <TextInput name="email" type="text" placeholder="Email" />
            <TextInput name="password" type="password" placeholder="Password" />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginBox;
