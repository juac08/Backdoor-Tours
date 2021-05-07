import React from "react";
import styled from "styled-components";
import Image1 from "../images/tour-1.jpeg";
import Image2 from "../images/tour-2.jpeg";
import Image3 from "../images/tour-3.jpeg";
import Image4 from "../images/tour-4.jpeg";

const Tours = () => {
  return (
    <Wrapper>
      <div>
        <h2 className="title">
          Featured <span>Tours</span>
        </h2>
      </div>
      <div className="container">
        <div className="tours">
          <div className="tour-head">
            <img src={Image1} alt="" className="tour-img" />
            <p className="tour-date">Auguset 1th,2021</p>
          </div>

          <div className="tour-info">
            <h4>Explor Pakistan</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
              dicta officiis hic quisquam soluta vitae animi! Aperiam id quis a
              voluptate debitis laboriosam sunt omnis!
            </p>
            <hr />
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fab fa-fantasy-flight-games"></i>{" "}
                </span>
                Pakistan
              </p>
              <p>5 Days</p>
              <p>From $1000</p>
            </div>
          </div>
        </div>
        <div className="tours">
          <div className="tour-head">
            <img src={Image2} alt="" className="tour-img" />
            <p className="tour-date">Auguset 5th,2021</p>
          </div>

          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
              dicta officiis hic quisquam soluta vitae animi! Aperiam id quis a
              voluptate debitis laboriosam sunt omnis!
            </p>
            <hr />
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fab fa-fantasy-flight-games"></i>{" "}
                </span>
                China
              </p>
              <p>6 Days</p>
              <p>From $2100</p>
            </div>
          </div>
        </div>
        <div className="tours">
          <div className="tour-head">
            <img src={Image3} alt="" className="tour-img" />
            <p className="tour-date">Auguset 10th,2021</p>
          </div>

          <div className="tour-info">
            <h4>Best of Java</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
              dicta officiis hic quisquam soluta vitae animi! Aperiam id quis a
              voluptate debitis laboriosam sunt omnis!
            </p>
            <hr />
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fab fa-fantasy-flight-games"></i>{" "}
                </span>
                Indonesia
              </p>
              <p>6 Days</p>
              <p>From $2100</p>
            </div>
          </div>
        </div>
        <div className="tours">
          <div className="tour-head">
            <img src={Image4} alt="" className="tour-img" />
            <p className="tour-date">Auguset 26th,2021</p>
          </div>

          <div className="tour-info">
            <h4>Exploar Hong Kong</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
              dicta officiis hic quisquam soluta vitae animi! Aperiam id quis a
              voluptate debitis laboriosam sunt omnis!
            </p>
            <hr />
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fab fa-fantasy-flight-games"></i>{" "}
                </span>
                Hong Kong
              </p>
              <p>6 Days</p>
              <p>From $2100</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tours;

const Wrapper = styled.section`
  .title {
    text-transform: uppercase;
    text-align: center;
    margin: 4rem;
  }
  .title span {
    color: #14c6dd;
  }
  .container {
    padding: 0 1rem;
  }
  .tour-head {
    position: relative;
  }
  .tour-date {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #58d2e2;
    font-weight: bold;
    color: #534f4f;
    margin: 0;
  }
  .tour-info {
    text-align: start;
    margin: 1rem;
  }
  .tour-footer {
    display: flex;
    flex: 0 0 calc(33.333% - 1rem);
    justify-content: space-between;
  }
  .tour-footer p {
    color: #22a3b4;
  }
  .tours {
    background: #f8f4f4;
    box-shadow: var(--dark-shadow);
    transition: transform 0.6s ease;
  }
  .tours:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02) translateY(-5px);
    background: white;
  }
  @media screen and (min-width: 800px) {
    .container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .tours {
      flex: 0 0 calc(50% - 1rem);
      margin: 0 0 1rem 1rem;
    }
  }
  @media screen and (min-width: 992px) {
    .tours {
      flex: 0 0 calc(33.333% - 1rem);
      margin: 0 0 1rem 1rem;
    }
  }
`;
