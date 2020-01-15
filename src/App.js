import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import Axios from "axios";
import Detail from "./Detail.js";
import Plot from "./Plot.js";
import "./App.css";

const Container = styled.div`
  width: 100%;
  height: 4000px;
  /* display: block; */
  /* position: fixed; */
  top: 50px;
`;

const Section = styled.div``;

class App extends React.Component {
  state = {
    data: []
  };
  getItems = async () => {
    const { data } = await Axios.get("http://15.164.228.86:3000/api/data");
    this.setState({ data });
  };
  componentDidMount() {
    this.getItems();
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Detail data={data} />
      </Container>
    );
  }
}

export default App;
