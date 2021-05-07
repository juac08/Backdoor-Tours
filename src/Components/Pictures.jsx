import React from "react";
import styled from "styled-components";
import Image1 from "../images/tour-1.jpeg";
import Image2 from "../images/tour-2.jpeg";
import Image3 from "../images/tour-3.jpeg";
import Image4 from "../images/tour-4.jpeg";

const Pictures = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Gallery</h2>
      </div>
      
      <div className='pic'>
        <div className="ok">
          <img src={Image1} alt="" />
        </div>
        <div className="ok">
          <img src={Image2} alt="" />
        </div>
        <div className="ok">
          <img src={Image3} alt="" />
        </div>
        <div className="ok">
          <img src={Image4} alt="" />
        </div>
        <div className="ok">
          <img src={Image1} alt="" />
        </div>
        <div className="ok">
          <img src={Image2} alt="" />
        </div>
        <div className="ok">
          <img src={Image3} alt="" />
        </div>
        <div className="ok">
          <img src={Image4} alt="" />
        </div>
      </div>
    
    </Wrapper>
  );
};

export default Pictures;

const Wrapper = styled.section`
  .title {
    text-align: center;
  }
  

  @media screen and (min-width: 768px) {
    .pic {
      display: flex;
      flex-wrap: wrap;
      justify-content:space-around
    }
    .ok{
        display:flex;
        flex:0 0 calc(50%);
    }
  }
  @media screen and (min-width: 1170px) {
    .pic {
      display: flex;
      flex-wrap: wrap;
      justify-content:space-between;
    }
    .ok{
        display:flex;
        flex:0 0 calc(25%);
    }
  }
  @media screen and (min-width: 992px) {
    .pic {
      display: flex;
      flex-wrap: wrap;
      justify-content:stretch;
    }
    .ok{
        display:flex;
        flex:0 0 calc(33.333%);
    }
  }
`;
