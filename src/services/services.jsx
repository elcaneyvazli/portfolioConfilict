import axios from "axios";

const BASE_URL = process.env.API_URL;

export const getList = async (type) => {
  let url = BASE_URL + type + "/GetList";
  let data = await axios.get(url).then((res) => res.data);
  return data;
};

export const getById = async (type, id) => {
  let url = `${BASE_URL}${type}/GetById?id=${id}`;
  let data = await axios.get(url).then((res) => res.data);
  return data;
};

export const add = async (type, req) => {
  let url = BASE_URL + type + "/Add" + type;
  let data = await axios.post(url, req).then((res) => res.data);
  return data;
};

export const remove = async (type, id) => {
  let url = BASE_URL + type + "/Delete" + type;
  let data = await axios.post(url, id).then((res) => res.data);
  return data;
};

export const put = async (type, req) => {
  let url = BASE_URL + type + "/Put" + type;
  let data = await axios.post(url, req).then((res) => res.data);
  return data;
};
