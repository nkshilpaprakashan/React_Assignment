import React from 'react';
import styled from 'styled-components';
import Image1 from '../Styles/logo.png';
import Burger from './Burger';
import Middle from './Middle';

const Nav = styled.nav`
  background-color: #0d1c04;
  width: 100%;
  height: 58px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: space-between;
  color: #fff;
`;

const LogoContainer = styled.div`
  display: flex; /* Enable flex layout */
  align-items: center; /* Align items vertically */
`;

const LogoImage = styled.img`
  margin: 0;
  max-width: 30px;
  height: auto;
`;

const GraveText = styled.p`
  padding-left: 10px; /* Add padding to create space between logo and text */
  color: white;
  margin: 0; /* Remove default margin */
`;

function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={Image1} />
        <GraveText>Grave Sites Management</GraveText>
      </LogoContainer>
      <Middle />
      <Burger />
    </Nav>
  );
}

export default Navbar;
