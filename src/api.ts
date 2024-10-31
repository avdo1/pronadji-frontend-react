import { ENDPOINTS } from "./constants/endpoints";
import TOKEN from "./lib/token";

const fetcher = async (
  endpoint: { uri: string; method: string },
  body?: any,
) => {
  let headers: any = {
    "Content-Type": "application/json",
  };

  const token = TOKEN.get();
  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  const response = await fetch(endpoint.uri, {
    method: endpoint.method,
    headers: headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`);
  }

  return response.json();
};

export const login = (credentials: {
  email: string;
  password: string;
  isRegularLogin: boolean;
}) => fetcher(ENDPOINTS.login, credentials);

export const signup = (userInfo: {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  roleId: number;
}) => fetcher(ENDPOINTS.signup, userInfo);

export const getMe = () => fetcher(ENDPOINTS.getMe);

export const createLocal = (localData: {
  name: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  workingHours: string;
  facebook: string;
  twitter: string;
  instagram: string;
  subCategoryId: string;
}) => {
  const formattedData = {
    ...localData,
    workingHours: Number(localData.workingHours) || 0,
  };

  return fetcher(ENDPOINTS.createLocal, formattedData);
};

export const createEvent = (eventData: {
  name: string;
  description: string;
  enterPrice: number;
  enterPriceConsumation: boolean;
  startDate: Date;
  entDate: Date;
  startTime?: Date;
  endTime?: Date;
  mainLocalId?: string;
}) => {
  const formattedData = {
    ...eventData,
    enterPrice: Number(eventData.enterPrice) || 0,
  };

  return fetcher(ENDPOINTS.createEvent, formattedData);
};

export const updateEvent = (eventData: {
  id: string;
  name: string;
  description: string;
  enterPrice: number;
  enterPriceConsumation: boolean;
  startDate: Date;
  entDate: Date;
  startTime?: Date;
  endTime?: Date;
  mainLocalId?: string;
}) => {
  const formattedData = {
    ...eventData,
    enterPrice: Number(eventData.enterPrice) || 0,
  };

  return fetcher(ENDPOINTS.updateEvent(eventData.id), formattedData);
};
export const deleteEventById = (id: string) =>
  fetcher(ENDPOINTS.deleteEventById(id));

export const createCategory = (categoryData: {
  descritption?: string;
  categoryName: string;
  mainLocal: any;
  products: {
    name: string;
    price: number;
    description: string;
  }[];
}) => {
  return fetcher(ENDPOINTS.createCategory, categoryData);
};
export const updateCategory = (categoryData: {
  descritption?: string;
  categoryName: string;
  mainLocal: any;
  id: string;
  products: {
    name: string;
    price: number;
    description: string;
  }[];
}) => {
  return fetcher(ENDPOINTS.updateCategory(categoryData.id), categoryData);
};
export const deleteCategoryById = (id: string) =>
  fetcher(ENDPOINTS.deleteCategoryById(id));

export const jobOffer = (jobOfferData: {
  name: string;
  email: string;
  description: string;
  status: string;
  phone: string;
  mainLocalId?: string;
}) => {
  const formattedData = {
    ...jobOfferData,
  };

  return fetcher(ENDPOINTS.createJobOffer, formattedData);
};

export const deleteJobOfferById = (id: string) =>
  fetcher(ENDPOINTS.deleteJobOfferById(id));

export const createDailyOffer = (dailyOfferData: {
  name: string;
  newPrice: string;
  status: string;
  mainLocal: any;
}) => {
  const formattedData = {
    ...dailyOfferData,
  };

  return fetcher(ENDPOINTS.createDailyOffer, formattedData);
};

export const updateDailyOffer = (dailyOfferData: {
  name?: string;
  newPrice?: string;
  status?: string;
  mainLocal?: any;
  id: string;
}) => {
  const formattedData = {
    ...dailyOfferData,
  };

  return fetcher(
    ENDPOINTS.updateDailyOfferById(dailyOfferData.id),
    formattedData,
  );
};

export const deleteDailyOfferById = (id: string) =>
  fetcher(ENDPOINTS.deleteDailyOfferById(id));

export const createJobOffer = (jobOfferData: {
  name: string;
  email: string;
  status: string;
  description: string;
  phone: string;
  mainLocal: any;
}) => {
  const formattedData = {
    ...jobOfferData,
  };

  return fetcher(ENDPOINTS.createJobOffer, formattedData);
};

export const updateJobOffer = (jobOfferData: {
  name?: string;
  email?: string;
  status?: string;
  description?: string;
  id: string;
  phone?: string;
  mainLocal?: any;
}) => {
  const formattedData = {
    ...jobOfferData,
  };

  return fetcher(ENDPOINTS.updateJobOffer(jobOfferData.id), formattedData);
};

export const getLocals = () => fetcher(ENDPOINTS.getLocals);

export const getSearchLocals = (data: {
  name?: string;
  location?: string;
  category?: string;
  event?: string;
}) => {
  const queryParams = new URLSearchParams(data as any).toString();
  return fetcher(ENDPOINTS.searchLocal(queryParams));
};

export const getLocalById = (id: string) => fetcher(ENDPOINTS.getLocalById(id));

export const getCategoryById = (id: string) =>
  fetcher(ENDPOINTS.getCategoryById(id));

export const getEvents = () => fetcher(ENDPOINTS.getEvents);

export const getActiveEventsByLocalId = (id: string) =>
  fetcher(ENDPOINTS.getActiveEventsByLocalId(id));

export const getPassedEventsByLocalId = (id: string) =>
  fetcher(ENDPOINTS.getPassedEventsByLocalId(id));

export const getCategoriesByLocalId = (id: string) =>
  fetcher(ENDPOINTS.getCategoriesByLocalId(id));

export const getDailyOfferByLocalId = (id: string) =>
  fetcher(ENDPOINTS.getDailyOfferByLocalId(id));

export const getJobOfferByLocalId = (id: string) =>
  fetcher(ENDPOINTS.getJobOfferByLocalId(id));

export const getEventById = (id: string) => fetcher(ENDPOINTS.getEventById(id));
