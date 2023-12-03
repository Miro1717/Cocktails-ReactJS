import * as cocktailServices from "../../services/cocktail/cocktailServices";
import CocktailsItem from "./CocktailItem";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

import "./cocktailItem.css";

const CocktailCatalog = function () {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cocktailServices
            .getAll()
            .then((result) => setCocktails(result))
            .catch((err) => console.log(err));

        setTimeout(setLoading(false), 3000);
    }, []);

    return (
        <>
            <h1 style={{ color: "white", textAlign: "center" }}>Catalog</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    margin: "10px",
                }}
            >
                {loading ? (
                    <div style={{ margin: "auto", marginTop: "100px" }}>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>
                ) : cocktails.length === 0 ? (
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

export default CocktailCatalog;
