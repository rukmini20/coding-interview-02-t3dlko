import api,{users} from "./api";

const getusersAPI = async (value) => {
  try {
    return await api
      .get(`${users}?page=${value}`)
      .then((response) => {
        return { status: response.status, body: response.data };
      })
      .catch((err) => {
        return { status: err.response.status, body: err.response.data };
      });
  } catch (err) {
    return { status: 500, body: "Failed to connect" };
  }
};
export {
  getusersAPI,
}