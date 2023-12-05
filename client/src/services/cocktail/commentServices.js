import * as request from "../request";

const baseUrl = "http://localhost:3030/data/comments";
export const getAll = async (cocktailId) => {
    const query = new URLSearchParams({
        where: `cocktailId="${cocktailId}"`,
        load: `owner=_ownerId:users`,
    });
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (gameId, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        text,
    });

    return newComment;
};
