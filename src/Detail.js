import React from "react";
import styled from "styled-components";
import { XYPlot, HorizontalBarSeries } from "react-vis";
import Plot from "./Plot.js";

const ItemContainer = styled.div`
  display: flex;
`;

const DetailContainer = styled.div`
  /* float: left; */
  display: block;
  width: 17%;
  height: auto;
  margin: 5px 0;
`;

const Image = styled.img`
  justify-content: space-between;
  height: 50px;
  width: 50px;
  padding: 5px;
  margin: 0;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ItemDetail = styled.div`
  position: relative;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${props => props.color};
  float: left;
  position: absolute;
  top: 18px;
  left: 38px;
`;

const Name = styled.h3`
  margin: 0;
  float: left;
  width: 130px;
  position: absolute;
  top: 17px;
  left: 62px;
`;

const GraphContainer = styled.div`
  float: left;
  display: flex;
  width: 35%;
  position: absolute;
  top: 23px;
  left: 145px;
  /* justify-content: center; */
`;

const Summary = styled.div`
  position: absolute;
`;

function Detail({ data }) {
  const items = data;
  // console.log(items);
  // let BestTester = 0;
  // let BestSeller = 0;
  // items.map(item => {
  //   BestTester = item.testCnt > BestTester ? item.testCnt : BestTester;
  //   BestSeller = item.purchaseCnt > BestSeller ? item.purchaseCnt : BestSeller;
  // });
  return (
    <ItemContainer>
      <DetailContainer>
        {items.map(item => (
          <ItemDetail>
            <Image src={item.imgUrl} />
            <Color color={item.color} />
            <Name>{item.name}</Name>
          </ItemDetail>
        ))}
      </DetailContainer>
      <GraphContainer>
        <XYPlot height={350} width={350}>
          {items.map(item => (
            <HorizontalBarSeries
              data={[
                { x: item.testCnt, y: (items.length - item.id) * 2 },
                { x: item.purchaseCnt, y: (items.length - item.id) * 2 - 1 }
              ]}
              color="#c10c3f"
              animation
            />
          ))}
        </XYPlot>
        <Plot items={items} />
      </GraphContainer>
      <GraphContainer>{/* <Plot items={items} /> */}</GraphContainer>
    </ItemContainer>
  );
}

export default Detail;
