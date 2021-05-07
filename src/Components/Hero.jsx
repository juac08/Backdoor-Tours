import React from "react";
import styled from "styled-components";
import Image from '../images/main.jpeg'
const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="hero">
        <div className="hero-banner">
          <h1>Continue Exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            culpa assumenda porro eum asperiores voluptatem.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dolores
          </p>
          <a href="featured" className="btn hero-btn scroll-link">
            Explore Tours
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  .hero {
    min-height: 100vh;
    background: var(--clr-primary-5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-banner {
    text-align: center;
    color: white;
    padding: 0 3rem;
  }
  .hero-banner h1 {
    text-transform: uppercase;
  }
  .hero-banner p {
    max-width: 35rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: white;
  }
  .hero-btn {
    padding: 0.9rem 1.6rem;
    background: white;
    color: var(--clr-primary-5);
    font-size: 1.25rem;
  }
  .hero-btn:hover {
    background: transparent;
    color: white;
    border-color: white;
  }
  @media screen and (min-width:768px) {
    .hero {
        background: linear-gradient(rgba(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)), url(${Image}) center/cover no-repeat;
    }
    .hero-banner {
        padding: 0;
    }
    .hero-banner {
        max-width: 45rem;
    }
}
 
`
