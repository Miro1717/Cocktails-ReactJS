import * as request from "../request";

const baseUrl = "http://localhost:3030/data/cocktails";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getLastCocktails = async () => {
  const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

  return result;
};

export const getOne = async (cocktailId) => {
  const result = await request.get(`${baseUrl}/${cocktailId}`);

  return result;
};

export const create = async (cocktailData) => {
  const result = await request.post(baseUrl, cocktailData);

  return result;
};

export const edit = async (cocktailId, cocktailData) => {
  const result = await request.put(`${baseUrl}/${cocktailId}`, cocktailData);

  return result;
};

export const remove = async (cocktailId) =>
  request.remove(`${baseUrl}/${cocktailId}`);
