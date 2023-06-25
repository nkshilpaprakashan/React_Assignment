import React from 'react';
import styled from 'styled-components';
import {FiSettings} from 'react-icons/fi'
import {BiSolidHelpCircle} from 'react-icons/bi'
import {BiSearch} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'

const Ul = styled.ul `
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${
    ({open}) => open ? 'translateX(0)' : 'translateX(100%)'
};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
        color: #fff;
    }
  }
`;
const OptionList = styled.select `
  background-color:#0d1c04;
  color: #fff;
  border: none;
  margin-right: 10px;
`;

const RightNav = ({open}) => {
    return (
        <Ul open={open}>

            <li><BiSearch/></li>
            <li><FiSettings/></li>
            <li><BiSolidHelpCircle/></li>
            <li><BiUserCircle/></li>
            <li>
                <OptionList>
                    <option value="maintain">John Snow</option>
                    <option value="item1">Option 1</option>
                    <option value="item2">Option 2</option>
                    <option value="item3">Option 3</option>
                </OptionList>

            </li>

        </Ul>
    )
}

export default RightNav
