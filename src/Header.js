import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  color: white;
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.7);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

function Header() {
  return (
    <HeaderContainer>
      <h2>Lg-660</h2>
    </HeaderContainer>
  );
}

export default Header;
