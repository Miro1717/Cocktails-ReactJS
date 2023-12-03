const NotFont = function () {
    return (
        <div
            style={{ color: "white", textAlign: "center" }}
            className="not-found-page-container"
        >
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The Page you are looking for doesn't exist or another error
                occurred. Go to <a href="cocktails/catalog">Wood Gallery</a>.
            </p>
        </div>
    );
};

export default NotFont;
