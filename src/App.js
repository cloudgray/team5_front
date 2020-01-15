import React from "react";
import styled from "styled-components";
import Axios from "axios";
import Detail from "./Detail.js";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Section = styled.div``;

class App extends React.Component {
  state = {
    data: []
  };
  getData = async () => {
    const data = await Axios.get("http://localhost:3000/api/data");
    this.setState({ data });
  };
  componentDidMount() {
    console.log(this.getData());
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        {data.map(item => (
          <Detail
            id={item.id}
            name={item.name}
            color={item.color}
            testCnt={item.testCnt}
            purchaseCnt={item.purchaseCnt}
          />
        ))}
      </Container>
    );
  }
}

export default App;
