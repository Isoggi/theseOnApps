import { HttpClient } from "../classes/http.class";

const apiInit = (endpoint?: string, token?: string) => {
  return new HttpClient(`${endpoint}`, {
    Authorization: `Bearer ${token}`,
  });
};

async function getData(url?: string): Promise<unknown> {
  return apiInit(url).get<unknown>;
}

async function postData(url?: string): Promise<unknown> {
  return;
}

const putData = () => {
  return;
};
const patchData = () => {
  return;
};

const deleteData = () => {
  return;
};

export { getData, postData, putData, patchData, deleteData };
