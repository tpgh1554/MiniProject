import { useState, useEffect } from "react";
import beer from "../img/backgroundimg/beer.jpg";
import traditional from "../img/backgroundimg/traditonal.jpg";
import wine from "../img/backgroundimg/wine.jpg";
import wiskey from "../img/backgroundimg/wiskey.jpg";
// import prevslider from "../img/details/btn-slider-prev_moblie.png";
// import nextslider from "../img/details/btn_slider_next.png";
import styled from "styled-components";

//BackgrroundImg StyledComponent
const Container = styled.div`
  width: 100vw;
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  border: none;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Background = ({ children }) => {
  const [background, setBackground] = useState(beer);
  const onClick = (url) => {
    setBackground(url);
  };
  return (
    <Container>
      <BackgroundImg imageurl={background}>{children}</BackgroundImg>
    </Container>
  );
};

export default Background;
