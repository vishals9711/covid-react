import React from 'react';
import { GENRE_RESPONSE } from '../../constants/constants';
import { returnYear } from '../../utils/utils';
import './MovieCard.scss';

export interface IMovieCardProps {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieCard = (props: IMovieCardProps): React.ReactElement => {
  const { title, release_date, poster_path, vote_average, genre_ids } = props;
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  const returnGenres = (ids: number[]): string => {
    const array = ids.slice(0, 2);
    let genres = '';
    array.forEach((id, index) => {
      const genre = GENRE_RESPONSE.find((response) => response.id === id);
      if (genre)
        genres += index !== array.length - 1 ? genre.name + ' | ' : genre.name;
    });
    return genres;
  };

  return (
    <div className="card movie_card">
      <img src={baseUrl + poster_path} className="card-img-top" alt={title} />
      <div className="card-body">
        <div className="titleDiv">
          <h5 className="card-title">{title}</h5>
          <div className="card__rating">{vote_average} / 10</div>
        </div>
        <div className="captionDiv">
          <div className="genres">{returnGenres(genre_ids)}</div>{' '}
          <span className="yearInfo">{returnYear(release_date)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
