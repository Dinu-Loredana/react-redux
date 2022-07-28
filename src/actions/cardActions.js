import axios from "axios";

export const deleteCard = (userId) => {
  return {
    type: "DELETE_CARD",
    userId,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      dispatch({ type: "FETCH_USERS", payload: data });
    });
  };
};
