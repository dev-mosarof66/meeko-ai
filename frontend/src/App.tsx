import { Route, Routes } from "react-router";
import Landing from "./pages/landing";
import Layout from "./pages/layout";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
