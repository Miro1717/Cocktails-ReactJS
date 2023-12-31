import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/authContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/cocktail-catalog/CocktailCatalog";
import Footer from "./components/footer/Footer";
import Create from "./components/cocktail-create/CocktailCreate";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MyProfile from "./components/user-profile/MyProfile";
import NotFound from "./components/not-found/NotFound";
import Details from "./components/cocktail-details/CocktailDetails";
import Edit from "./components/cocktail-edit/CocktailEdit";
import Logout from "./components/logout/Logout";
import { RouteGuard } from "./components/guards/AuthGuard";

function App() {
    return (
        <AuthProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktails/catalog" element={<Catalog />}></Route>
                <Route path="/cocktails/:id" element={<Details />}></Route>

                <Route path="users/login" element={<Login />}></Route>
                <Route path="users/register" element={<Register />}></Route>
                <Route path="users/logout" element={<Logout />} />

                <Route element={<RouteGuard />}>
                    <Route
                        path="/cocktails/create"
                        element={<Create />}
                    ></Route>
                    <Route
                        path="/cocktails/edit/:id"
                        element={<Edit />}
                    ></Route>
                    <Route
                        path="/users/profile"
                        element={<MyProfile />}
                    ></Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </AuthProvider>
    );
}

export default App;
