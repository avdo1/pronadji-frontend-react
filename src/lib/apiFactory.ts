import _ from "lodash";
import Axios from "axios";
import qs from "qs";

import TOKEN from "./token";
import { ENDPOINTS } from "../constants/endpoints";

type FetchProps = {
  endpoint: string;
  data: any;
  sendInParams?: boolean;
};

const baseUrl = "http://localhost:4000";

class ApiFactory {
  headers;

  endpoints;

  constructor(endpoints: any) {
    this.headers = {};
    this.endpoints = endpoints;
  }

  setHeaders(key: any, value: any) {
    this.headers = { ...this.headers, [key]: value };
  }

  fetch = ({ endpoint, data = {}, sendInParams }: FetchProps) => {
    const response = this.generateFullUri(this.endpoints[endpoint].uri, data);
    let { url } = response;
    const { removed } = response;
    const method = this.endpoints[endpoint].method;
    const body = Array.isArray(data) ? data : _.omit(data, removed);

    const token = TOKEN.get();

    if (token) {
      this.headers = { Authorization: `Bearer ${token}` };
    } else {
      this.headers = {};
    }

    if (method === "GET" && !sendInParams) {
      const queryString = qs.stringify(body);
      if (queryString) {
        url += `?${queryString}`;
      }
    }

    return Axios({
      url,
      method,
      data: body,
      headers: this.headers,
    });
  };

  generateFullUri = (endpoint: any, data: any = {}) => {
    const removed: any = [];
    const url = `${baseUrl}${endpoint}`.replace(/\{(.*?)\}/g, (token, name) => {
      let value = token;
      if (data && data[name]) {
        removed.push(name);
        value = data[name].toString();
      }
      return value;
    });

    return { url, removed };
  };

  /* Tests */
  reinitializeEndpoints = (endpoints: any) => {
    this.endpoints = endpoints;
  };
}

const api = new ApiFactory(ENDPOINTS);

export default api;
