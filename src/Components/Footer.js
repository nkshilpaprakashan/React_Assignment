import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0D2538;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CompanyName = styled.div `
  font-weight: bold;
`;

const LinksContainer = styled.div `
  display: flex;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Link = styled.a `
  color: #fff;
  margin-right: 30px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <CompanyName>@2023 Company
            </CompanyName>
            <LinksContainer>
                <Link href="#">About</Link>
                <Link href="#">Terms of Use</Link>
                <Link href="#">Contact</Link>
            </LinksContainer>
        </FooterContainer>
    );
};

export default Footer;
