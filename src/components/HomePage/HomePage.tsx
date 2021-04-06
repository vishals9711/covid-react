import React, { useState } from 'react';
import CardLoader from '../CardLoader/CardLoader';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SearchAPI, SearchAPIResponse } from '../../services/SearchAPI';

const HomePage = (): React.ReactElement => {
  const [
    searchResponse,
    setSearchResponse,
  ] = useState<SearchAPIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const getMovies = (search: string) => {
    setLoading(true);
    window.scrollTo(0, 0);
    setSearchResponse(null);
    SearchAPI(search).then((data) => {
      setSearchResponse(data.data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  };
  return (
    <Row style={{ marginTop: '1rem' }}>
      <Col className="searchBarColumn" lg={12}>
        <SearchBar searchButtonClick={getMovies} />
      </Col>
      {loading && <CardLoader count={3} />}
      {!loading &&
        searchResponse &&
        searchResponse.results.map((data, index) => (
          <Col key={index} lg={4}>
            <MovieCard {...data} />
          </Col>
        ))}
    </Row>
  );
};

export default HomePage;
