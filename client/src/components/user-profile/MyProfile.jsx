import AuthContext from "../../context/authContext";
import { useContext, useState, useEffect } from "react";
import { getOwnerCocktails } from "../../services/cocktail/cocktailServices";
import CocktailsItem from "../cocktail-catalog/CocktailItem";

const MyProfile = function () {
    const [cocktails, setCocktails] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        getOwnerCocktails(userId).then((result) => setCocktails(result));
    }, []);

    return (
        <>
            <h1 style={{ color: "white", textAlign: "center" }}>
                My Cocktails:
            </h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    margin: "10px",
                }}
            >
                {cocktails.map((cocktail) => (
                    <CocktailsItem key={cocktail._id} {...cocktail} />
                ))}

                {cocktails.length === 0 && (
                    <h3
                        style={{
                            marginTop: "100px",
                            color: "white",
                            position: "absolute",
                            top: "80px",
                            right: "50%",
                        }}
                    >
                        No cocktails to views
                    </h3>
                )}
            </div>
        </>
    );
};

export default MyProfile;
