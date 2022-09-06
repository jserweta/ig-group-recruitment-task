import { useReducer, useEffect } from "react";
import { apiReducer } from "../reducers/apiReducer";
import { doFetch } from "../actions/doFetch";
import { ENDPOINT_ACCOUNTS, ENDPOINT_ACCOUNT_TYPES } from "../constants/api";
import { prepareAccData } from "../helpers/prepareAccData";

export const useApi = () => {
  const [response, dispatch] = useReducer(apiReducer, {
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    Promise.all([doFetch(ENDPOINT_ACCOUNTS), doFetch(ENDPOINT_ACCOUNT_TYPES)])
      .then((data) => {
        data[0] = prepareAccData(data[0]);
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "ERROR", payload: error });
      });
  }, []);

  return response;
};
