import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
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
  );
}

export default App;
