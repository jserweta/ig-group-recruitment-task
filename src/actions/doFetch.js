import { API_KEY, API_URL } from "../constants/api";

export const doFetch = async (path) => {
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    headers: {
      "x-apikey": API_KEY,
    },
  });

  if (response.ok) {
    return response.json();
  }

  throw await response.json();
};
