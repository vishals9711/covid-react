import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IMovieCardProps } from '../components/MovieCard/MovieCard';

export interface SearchAPIResponse {
  page: number;
  results: Array<IMovieCardProps>;
  total_pages: number;
  total_results: number;
}

export const SearchAPI = (
  search: string
): Promise<AxiosResponse<SearchAPIResponse>> => {
  const config: AxiosRequestConfig = {
    params: {
      api_key: '3b9a6ed72d9f555baf1e1ed7824b1314',
      query: search,
    },
  };
  return axios.get<SearchAPIResponse>(
    'https://api.themoviedb.org/3/search/movie',
    config
  );
};
