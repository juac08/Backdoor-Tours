import React from "react";
import Styled from "styled-components";
import Image from "../images/about.jpeg";

const About = () => {
  return (
    <Wrapper>
      <h2 className="title">
        About <span>US</span>
      </h2>
      <div className="container">
        <div className="about-img">
          <img src={Image} alt="About" />
        </div>
        <div className="about-info">
          <h2>Explore The Difference</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet, at
            hic ducimus minima consequuntur veritatis eum voluptate obcaecati
            odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet, at
            hic ducimus minima consequuntur veritatis eum voluptate obcaecati
            odio?
          </p>
          <a href="h" className="btn about-btn">
            Read More
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = Styled.section`
  text-align: center;
  width: 90vw;
  margin: 2rem auto;
  max-width:1170px;

  .title {
    text-transform: uppercase;
    --spacing: 0.25rem;
    margin-top: 3rem;
    
  }
  .title span {
    color: hsl(185, 62%, 45%);
  }
  .container{
      margin:1rem auto;
    
  }
 
  .container p {
    padding: 0 2rem;
  }
  
  img {
      display:block;
   margin:0 auto;
    max-width:35rem; 
  }
  .btn:hover {
    background: transparent;
    border-color: hsl(185, 62%, 45%);
  }
  .about-info{
      max-width:35rem;
      margin:1rem auto;
     
  }

  @media screen and  (min-width:992px){
      .container{
          display:flex;
          place-items:center;
          
      }

   }
   @media screen and  (min-width:990px){
    .about-img::before {
    content: "";
    position: absolute;
    border: 0.5rem solid var(--clr-primary-5);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    top: -1.5rem;
    left: -1.5rem;
    z-index:-1;
   
  }
  .about-img {
    position: relative;
    margin-top:2rem;
  }

   }

`;
