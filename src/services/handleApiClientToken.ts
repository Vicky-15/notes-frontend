import apiClient from "./api-client";

export function handleApiClientToken(token?: string | null): void {
  if (token) {
    localStorage.setItem("userAuthToken", token);
    apiClient.defaults.headers.common["Authorization"] = token;
  } else {
    localStorage.removeItem("userAuthToken");
    delete apiClient.defaults.headers.common["Authorization"];
  }
}
