import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper>
      <h2 className="title">
        Our <span>Services</span>
      </h2>
      <div className="services">
        <div className="service">
          <span>
            <i className="fas fa-money-check"></i>
          </span>
          <div>
            <h5>Saving Money</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.amet
              consectetur adipisicing elit.amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="service">
          <span>
            <i className="fas fa-money-check"></i>
          </span>
          <div>
            <h5>Amazing Comfort</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit amet
              consectetur adipisicing elit.amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="service">
          <span>
            <i className="fas fa-money-check"></i>
          </span>
          <div>
            <h5>Endless Banking</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.amet
              consectetur adipisicing elit.amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  text-align: center;
  background: #f9f9f9;
  margin: 4rem auto;

  .title {
    text-transform: uppercase;
  }
  .title span {
    color: hsl(185, 62%, 45%);
  }

  i {
    font-size: 2rem;
    padding: 1rem;
    background: hsl(185, 62%, 45%);
    color: white;
    display: inline-block;
    margin: 1rem;
  }
  .service {
    margin: 1rem auto;
  }
  .service p,
  h5 {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 1rem;
  }
  .service p {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 476px) {
    .services {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 992px) {
    .services {
      display: flex;
      flex: 0 0 calc(33.333% - 1rem);
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .service {
      display: flex;
      flex: 0 0 calc(33.333% - 1rem);
      justify-content: center;
      align-items: center;
    }
  }
`;
