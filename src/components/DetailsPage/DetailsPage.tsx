import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';
import {
  IProvider,
  MovieApiResponse,
  movieDetails,
} from '../../services/movieDetailsService';
import './DetailsPage.scss';
const DetailsPage = (): React.ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<MovieApiResponse | null>(null);
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    movieDetails(id).then((data) => {
      console.log(data.data);
      setData(data.data);
    });
  }, [id]);
  const returnGenres = (
    genreObj: Array<{ id: number; name: string }>
  ): string => {
    const array = genreObj.map((genre) => genre.name);
    let genres = '';
    array.forEach((name, index) => {
      if (name) genres += index !== array.length - 1 ? name + ' | ' : name;
    });
    return genres;
  };

  const returnOTTPlatforms = (obj: {
    buy: Array<IProvider>;
    flatrate: Array<IProvider>;
    rent: Array<IProvider>;
  }) => {
    return (
      <>
        <div className="ottSection">
          {obj.buy.length > 0 && <div className="ottHeading">Buy from</div>}
          <div className="ottLogos">
            {obj.buy.map((ott, index) => (
              <div key={index} className="ottIcon">
                <img src={baseUrl + ott.logo_path} alt={ott.provider_name} />
              </div>
            ))}
          </div>
        </div>
        <div className="ottSection">
          {obj.flatrate.length > 0 && (
            <div className="ottHeading">Subscription :</div>
          )}
          <div className="ottLogos">
            {obj.flatrate.map((ott, index) => (
              <div key={index} className="ottIcon">
                <img src={baseUrl + ott.logo_path} alt={ott.provider_name} />
              </div>
            ))}
          </div>
        </div>
        <div className="ottSection">
          {obj.rent.length > 0 && (
            <div className="ottHeading">Rent From : </div>
          )}
          <div className="ottLogos">
            {obj.rent.map((ott, index) => (
              <div key={index} className="ottIcon">
                <img src={baseUrl + ott.logo_path} alt={ott.provider_name} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="detailsPage">
      {data && (
        <>
          <div className="detailsDiv">
            <Row>
              <Col lg={8}>
                <div
                  className="detailsPageBg"
                  style={{
                    background: `url(${baseUrl}${data?.backdrop_path})`,
                  }}
                ></div>
                <div className="titleDiv">
                  <div className="tagLine">{data.overview}</div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="rightCol">
                  <Row>
                    <Col>
                      <img
                        src={baseUrl + data.poster_path}
                        alt={'poster'}
                        className="posterImg"
                      />
                    </Col>
                    <Col>
                      {' '}
                      <div className="title">{data.title}</div>
                      <div className="genres">{returnGenres(data.genres)}</div>
                    </Col>
                  </Row>
                  <Row className="ottPlatformRow">
                    <Col>
                      <div className="ottPlatform">OTT Platforms</div>
                      <div className="platforms">
                        {data &&
                          data['watch/providers'] &&
                          data['watch/providers']?.results['IN'] &&
                          returnOTTPlatforms(
                            data['watch/providers']?.results['IN']
                          )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
