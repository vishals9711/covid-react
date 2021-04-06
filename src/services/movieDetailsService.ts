import axios, { AxiosResponse } from 'axios';

export interface IProvider {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export interface MovieApiResponse {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string | null;
  id: 299534;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  'watch/providers': {
    results: {
      [key: string]: {
        buy: Array<IProvider>;
        flatrate: Array<IProvider>;
        rent: Array<IProvider>;
      };
    };
  };
}

export const movieDetails = (
  id: string
): Promise<AxiosResponse<MovieApiResponse>> => {
  return axios.get<MovieApiResponse>(`/api/v1/movie/${id}`);
};
