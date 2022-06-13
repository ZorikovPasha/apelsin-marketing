import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import { FormData } from "../components/common/Footer"
import { ProjectType } from '../types';

const URI = process.env.NODE_ENV === 'production' ? 'https://sponge-phantom-stem.glitch.me/' : 'http://localhost:5000';


export const apiConfig = {
  returnRejectedPromiseOnError: true,
  baseURL: URI,
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}

export class Axios {
  protected _axios: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this._axios =  axios.create(config);
  }
}


class Api extends Axios {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  success = <T>(response: AxiosResponse<T>): T =>  {
    return response.data;
  }

  error = <T>(error: AxiosError<T>): void => {
    throw error;
  }

  get = <T>(url: string): Promise<T> => {
    return this._axios.get(url)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        return error;
    });
    }
  post = <T, B>(url: string, data?: B): Promise<T> => {
    return this._axios.post(url, data)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        console.log(error.response);
        return error?.response?.data;
      });
  }
}

class UserApi extends Api {
  sendRequest = (data: FormData) => {
    return this.post("/request/make", data)
  }

  getProjects = () => {
    return this.get<ProjectType[]>("/api/projects")
  }

}


export const UserApiClient = new UserApi(apiConfig);
