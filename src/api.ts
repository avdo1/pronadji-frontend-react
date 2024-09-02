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
