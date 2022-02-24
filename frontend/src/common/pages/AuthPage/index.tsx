import { useLocation } from "react-router-dom";
import { ApplicationRoutes } from "config/variables";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";

const AuthPage = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex justify-center items-center">
      {pathname === ApplicationRoutes.login ? <LoginBox /> : <RegisterBox />}
    </div>
  );
};

export default AuthPage;
