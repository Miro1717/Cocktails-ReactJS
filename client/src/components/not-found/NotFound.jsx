import { Link } from "react-router-dom";

const NotFont = function () {
    return (
        <div style={{ color: "white", textAlign: "center" }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The Page you are looking for doesn't exist or another error
                occurred. Go to{" "}
                <Link to="cocktails/catalog">Cocktails Catalog</Link>.
            </p>
        </div>
    );
};

export default NotFont;
