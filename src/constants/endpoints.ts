// All endpoints must be in snake case (snake_case)
const ENDPOINTS = {
  // example: {
  //   uri: "/example",
  //   method: "GET",
  // },
  login: {
    uri: "/auth/login",
    method: "POST",
  },
  signup: {
    uri: "/auth/signup",
    method: "POST",
  },
  getMe: {
    uri: "/user/me",
    method: "GET",
  },
};

export { ENDPOINTS };
