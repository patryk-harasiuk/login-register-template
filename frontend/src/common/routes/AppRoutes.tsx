import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApplicationRoutes } from "config/variables";

import SuccessPage from "common/pages/SuccessPage";
import AuthPage from "common/pages/AuthPage";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ApplicationRoutes.main} element={<SuccessPage />} />
        <Route path={ApplicationRoutes.login} element={<AuthPage />} />
        <Route path={ApplicationRoutes.register} element={<AuthPage />} />
      </Routes>
    </Router>
  );
};
