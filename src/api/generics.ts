import axios, { AxiosError, AxiosResponse } from 'axios';
import { ErrorType, LoanGETResponse } from '../actions/models';

const baseURL = ''; // TODO: base url should be inserted here obviously

type QueryParams = {
  [key: string]: string | number;
};

type BaseRequestHandlerConfig = {
  queryParams?: QueryParams;
  begin?: Function;
  success?: Function;
  error?: ErrorType;
};

const getQueryParamsAsString = (queryParams?: QueryParams) => {
  return queryParams
    ? Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join('&')
    : '';
};

export const genericGet = (domain: string) => {
  return ({ queryParams, begin, success, error }: BaseRequestHandlerConfig) => {
    if (begin) {
      begin();
    }
    const queryParamsString = getQueryParamsAsString(queryParams);
    const completeURL = `${baseURL}/${domain}${queryParams ? `?${queryParamsString}` : ''}`;

    return axios
      .get(completeURL)
      .then((httpResponse: AxiosResponse<LoanGETResponse>) => success && success(httpResponse.data))
      .catch((axiosError: AxiosError) => error && error(axiosError));
  };
};
