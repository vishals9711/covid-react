import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Skeleton from 'react-loading-skeleton';
const CardLoader = (props: { count: number }): React.ReactElement => {
  return (
    <>
      {Array(props.count)
        .fill(0)
        .map((item, index) => (
          <Col lg={4} key={index} className="mt-4">
            <Skeleton height={240} />
            <h4 className="card-title">
              <Skeleton height={36} width={`100%`} />
            </h4>
            <p className="card-channel">
              <Skeleton width={`60%`} />
            </p>
            <div className="card-metrics">
              <Skeleton width={`90%`} />
            </div>
          </Col>
        ))}
    </>
  );
};
export default CardLoader;
