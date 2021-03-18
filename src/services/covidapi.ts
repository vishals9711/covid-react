import axios, { AxiosResponse } from 'axios';

export interface IAllCountryResponse {
  count: number;
  date: string;
  result: Array<{
    [key: string]: {
      confirmed: number;
      deaths: number;
      recovered: number;
    };
  }>;
}

export const getAllCountryLatest = (): Promise<
  AxiosResponse<IAllCountryResponse>
> => {
  return axios.get<IAllCountryResponse>(
    'https://covidapi.info/api/v1/global/latest'
  );
};

export interface IGlobalCountResponse {
  count: number;
  date: string;
  result: {
    confirmed: number;
    deaths: number;
    recovered: number;
  };
}

export const getGlobalCount = (): Promise<
  AxiosResponse<IGlobalCountResponse>
> => {
  return axios.get<IGlobalCountResponse>('https://covidapi.info/api/v1/global');
};

export interface IGlobalCountDateResponse {
  count: number;
  date: string;
  result: {
    [key: string]: {
      confirmed: number;
      deaths: number;
      recovered: number;
    };
  };
}

export const getGlobalCountDateWise = (): Promise<
  AxiosResponse<IGlobalCountDateResponse>
> => {
  return axios.get<IGlobalCountDateResponse>('https://covidapi.info/api/v1/global/count');
};

interface ICountryResponse {
  count: number;
  result: {
    [key: string]: {
      confirmed: number;
      deaths: number;
      recovered: number;
    };
  };
}

export const getCountryData = (
  country_code: string
): Promise<AxiosResponse<ICountryResponse>> => {
  return axios.get<ICountryResponse>(
    `https://covidapi.info/api/v1/country/${country_code}`
  );
};

export const getCountryDataForDate = (
  country_code: string,
  date: string
): Promise<AxiosResponse<ICountryResponse>> => {
  return axios.get<ICountryResponse>(
    `https://covidapi.info/api/v1/country/${country_code}/${date}`
  );
};
