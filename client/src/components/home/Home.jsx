import * as cocktailServices from "../../services/cocktail/cocktailServices";
import CocktailsItem from "../cocktail-catalog/CocktailItem";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

const Home = function () {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        cocktailServices
            .getLastCocktails()
            .then((result) => {
                if (result.length > 3) {
                    result = result.splice(0, 3);
                }
                setCocktails(result);
            })
            .catch((err) => console.log(err))
            .finally(setLoading(false));
    }, []);
    return (
        <>
            <h1 style={{ color: "white", textAlign: "center" }}>Home</h1>
            <h2 style={{ color: "white", textAlign: "center" }}>
                Last 3 Cocktails:
            </h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    margin: "10px",
                }}
            >
                {loading && (
                    <div style={{ margin: "auto", marginTop: "100px" }}>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>
                )}

                {cocktails.length === 0 ? (
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
                ) : (
                    cocktails.map((cocktail) => (
                        <CocktailsItem key={cocktail._id} {...cocktail} />
                    ))
                )}
            </div>
        </>
    );
};

export default Home;
