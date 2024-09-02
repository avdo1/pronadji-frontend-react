const API_BASE_URL = "http://localhost:4000";

const ENDPOINTS = {
  login: {
    uri: `${API_BASE_URL}/auth/login`,
    method: "POST",
  },
  signup: {
    uri: `${API_BASE_URL}/auth/signup`,
    method: "POST",
  },
  getMe: {
    uri: `${API_BASE_URL}/user/me`,
    method: "GET",
  },
  createLocal: {
    uri: `${API_BASE_URL}/main-local`,
    method: "POST",
  },
  createEvent: {
    uri: `${API_BASE_URL}/event`,
    method: "POST",
  },
};

export { ENDPOINTS };
