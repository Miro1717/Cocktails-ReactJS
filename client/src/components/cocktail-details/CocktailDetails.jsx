import { useContext, useEffect, useState, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as commentServices from "../../services/cocktail/commentServices";
import { getOne, remove } from "../../services/cocktail/cocktailServices";
import AuthContext from "../../context/authContext";
import reducer from "./reducer";
import useForm from "../../hooks/useForm";
import "./details.css";

const CocktailDetails = function () {
    const navigate = useNavigate();
    const { id } = useParams();
    const { userId, isAuthenticated, email } = useContext(AuthContext);
    const [comments, dispatch] = useReducer(reducer, []);

    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        getOne(id)
            .then((data) => setCocktail(data))
            .catch((err) => console.log(err));

        commentServices.getAll(id).then((result) => {
            dispatch({
                type: "GET_ALL_COMMENTS",
                payload: result,
            });
        });
    }, [id]);

    const addCommentHandler = async (values) => {
        const newComment = await commentServices.create(id, values.comment);

        newComment.owner = { email };

        dispatch({
            type: "ADD_COMMENT",
            payload: newComment,
        });
    };

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(
            `Are you sure you want to delete ${cocktail.cocktailName}`
        );

        if (hasConfirmed) {
            await remove(id);

            navigate("/cocktails/catalog");
        }
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: "",
    });

    const isOwner = userId === cocktail._ownerId;

    return (
        <div id="details-wrapper">
            <img id="details-img" src={cocktail.imageUrl} alt="example1" />
            <p id="details-title">{cocktail.cocktailName}</p>
            <p id="details-category">
                Category: <span id="categories">{cocktail.alcoholType}</span>
            </p>
            <div id="info-wrapper">
                <div id="details-description">
                    <span>{cocktail.description}</span>
                </div>
            </div>

            <h3>
                Likes: <span id="go">0</span>
            </h3>

            {isOwner && (
                <div id="action-buttons">
                    <a href={`/cocktails/edit/${id}`} id="edit-btn">
                        Edit
                    </a>
                    <a id="delete-btn" onClick={deleteButtonClickHandler}>
                        Delete
                    </a>
                </div>
            )}

            {isAuthenticated && !isOwner && (
                <div id="action-buttons">
                    <a href="" id="go-btn">
                        Likes
                    </a>
                </div>
            )}

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({ _id, text, owner: { email } }) => (
                        <li
                            style={{
                                width: "433px",
                                border: "3px",
                                margin: "5px",
                            }}
                            key={_id}
                            className="comment"
                        >
                            <p>
                                {email}: {text}
                            </p>
                        </li>
                    ))}
                </ul>

                {comments.length === 0 && (
                    <p className="no-comment">No comments.</p>
                )}
            </div>
            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea
                            name="comment"
                            value={values.comment}
                            onChange={onChange}
                            placeholder="Comment......"
                        ></textarea>
                        <input
                            className="btn submit"
                            type="submit"
                            value="Add Comment"
                        />
                    </form>
                </article>
            )}
        </div>
    );
};

export default CocktailDetails;
