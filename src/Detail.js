import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { XYPlot, HorizontalBarSeries } from "react-vis";

const Container = styled.div``;

const Image = styled.div`
  background-image: url("./image/1.jpg");
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Color = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const Name = styled.h3``;

function Detail({ id, name, color, testCnt, puchaseCnt }) {
  return (
    <Container>
      <Image />
      <Name>{name}</Name>
      {/* <XYPlot height={200} width={200}>
        <HorizontalBarSeries data={{ x: index, y: testCnt }} />
      </XYPlot> */}
    </Container>
  );
}

export default Detail;
