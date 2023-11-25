import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from "./services/user/authService";
import Path from "./path";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/cocktail-catalog/CocktailCatalog";
import Footer from "./components/footer/Footer";
import Create from "./components/cocktail-create/CocktailCreate";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MyProfile from "./components/user-profile/MyProfile";
import NotFound from "./components/not-found/NotFound";
import Edit from "./components/cocktail-edit/CocktailEdit";
import AuthContext from "./context/authContext";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    console.log(values);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  };

  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails/catalog" element={<Catalog />}></Route>
          <Route path="/cocktails/create" element={<Create />}></Route>
          <Route path="/cocktails/edit" element={<Edit />}></Route>
          <Route path="/users/profile" element={<MyProfile />}></Route>
          <Route path="users/login" element={<Login />}></Route>
          <Route path="users/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
