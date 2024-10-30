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
  searchLocal: (queryParams?: string) => ({
    uri: `${API_BASE_URL}/main-local/search/user?${queryParams}`,
    method: "GET",
  }),
  createEvent: {
    uri: `${API_BASE_URL}/event`,
    method: "POST",
  },
  updateEvent: (id: string) => ({
    uri: `${API_BASE_URL}/event/${id}`,
    method: "PATCH",
  }),
  createCategory: {
    uri: `${API_BASE_URL}/category`,
    method: "POST",
  },
  updateCategory: (id: string) => ({
    uri: `${API_BASE_URL}/category/${id}`,
    method: "PATCH",
  }),
  getLocals: {
    uri: `${API_BASE_URL}/subcategory`,
    method: "GET",
  },
  getLocalById: (id: string) => ({
    uri: `${API_BASE_URL}/main-local/${id}`,
    method: "GET",
  }),
  getCategoryById: (id: string) => ({
    uri: `${API_BASE_URL}/subcategory/${id}`,
    method: "GET",
  }),
  getActiveEventsByLocalId: (id: string) => ({
    uri: `${API_BASE_URL}/event/active/${id}`,
    method: "GET",
  }),
  getEventById: (id: string) => ({
    uri: `${API_BASE_URL}/event/${id}`,
    method: "GET",
  }),
  deleteEventById: (id: string) => ({
    uri: `${API_BASE_URL}/event/${id}`,
    method: "DELETE",
  }),
  getPassedEventsByLocalId: (id: string) => ({
    uri: `${API_BASE_URL}/event/passed/${id}`,
    method: "GET",
  }),
  getCategoriesByLocalId: (id: string) => ({
    uri: `${API_BASE_URL}/category/local/${id}`,
    method: "GET",
  }),
  deleteCategoryById: (id: string) => ({
    uri: `${API_BASE_URL}/category/${id}`,
    method: "DELETE",
  }),
  getDailyOfferByLocalId: (id: string) => ({
    uri: `${API_BASE_URL}/daily-offer/local/${id}`,
    method: "GET",
  }),
  deleteDailyOfferById: (id: string) => ({
    uri: `${API_BASE_URL}/daily-offer/${id}`,
    method: "DELETE",
  }),
  getJobOfferByLocalId: (id: string) => ({
    uri: `${API_BASE_URL}/job-offer/local/${id}`,
    method: "GET",
  }),
  deleteJobOfferById: (id: string) => ({
    uri: `${API_BASE_URL}/job-offer/${id}`,
    method: "DELETE",
  }),
  getEvents: {
    uri: `${API_BASE_URL}/event`,
    method: "GET",
  },
  createJobOffer: {
    uri: `${API_BASE_URL}/job-offer`,
    method: "POST",
  },
  JobOffer: {
    uri: `${API_BASE_URL}/job-offer`,
    method: "POST",
  },
  createDailyOffer: {
    uri: `${API_BASE_URL}/daily-offer`,
    method: "POST",
  },
  updateJobOffer: (id: string) => ({
    uri: `${API_BASE_URL}/job-offer/${id}`,
    method: "PATCH",
  }),
  updateDailyOfferById: (id: string) => ({
    uri: `${API_BASE_URL}/daily-offer/${id}`,
    method: "PATCH",
  }),
};
export { ENDPOINTS };
