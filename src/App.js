import { Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";
import SignUp from "./screens/Signup/Signup";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./screens/home/Home";
function App() {

  return (
    <>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signUp" />
        <Route element={<ProtectedRoute />}>
          <Route index={true} element={<Home />} path="/" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
