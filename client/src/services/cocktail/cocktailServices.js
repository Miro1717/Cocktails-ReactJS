import * as request from "../request";

const baseUrl = "http://localhost:3030/jsonstore/cocktails";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result);
};

export const getOne = async (cocktailId) => {
  const result = await request.get(`${baseUrl}/${cocktailId}`);

  return result;
};

export const create = async (cocktailData) => {
  const result = await request.post(baseUrl, cocktailData);

  return result;
};
