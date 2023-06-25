import React from 'react';
import styled from 'styled-components';
import {RxDashboard} from 'react-icons/rx';
import {BiDollar} from 'react-icons/bi';
import {BiSolidReport} from 'react-icons/bi';

const NavbarContainer = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  background-color: #0d1c04;
  color: #fff;
  @media (max-width: 768px) {
  flex-direction: column;
  }
`;

const OptionList = styled.select `
  background-color:#0d1c04;
  color: #fff;
  border: none;
 
  margin-right: 10px;
`;

const Button = styled.button`
background-color:#0d1c04; 
  color: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
  width: 150px;
  `;

const Middle = () => {
    return (
        <NavbarContainer>
            <OptionList>
                <option value="maintain"><RxDashboard/>Maintain</option>
                <option value="item1">Option 1</option>
                <option value="item2">Option 2</option>
                <option value="item3">Option 3</option>
            </OptionList>
            
            <Button className="">  <BiDollar style={{ marginRight: '8px' }} /> Payments</Button>
                <Button className=""><BiSolidReport/>Reports</Button>
            
        </NavbarContainer>
    );
};

export default Middle;
