import axios, { AxiosResponse } from 'axios';
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
  return axios.get<SearchAPIResponse>(`/api/v1/${search}`);
};
