import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/user/authService";
import Path from "../path";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    AuthContext.displayName = "AuthContext";

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState("auth", {});

    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const hideErrorBox = () => {
        setErrorMessage("");
        setShowErrorMessage("false");
    };

    useEffect(() => {
        if (errorMessage !== "") {
            setShowErrorMessage(true);
        }
    }, [errorMessage]);

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(
                values.email,
                values.password
            );

            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);

            navigate(Path.Home);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const registerSubmitHandler = async (values) => {
        const { rePassword, ...registerData } = values;

        if (rePassword !== registerData.password) {
            setErrorMessage("Passwords dont match");
            return;
        }

        if (!isEmailValid(registerData.email)) {
            setErrorMessage(
                "Invalid email address. Please enter a valid email."
            );
            return;
        }

        try {
            const result = await authService.register(
                values.email,
                values.password
            );
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem("accessToken");
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        hideErrorBox,
        errorMessage,
        showErrorMessage,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
