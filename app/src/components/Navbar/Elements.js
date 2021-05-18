import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';


export const Nav = styled.nav`
  font-family: 'Josefin Sans', sans-serif;
//   background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((92.5vw - 1000px) / 2);
  z-index: 10;
  font-weight: 500;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const Logo = styled.img`
    width: 10vw;
    height: auto;
`;


export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.25rem;
  :hover {
    transition: all 0.2s ease-in-out;
    color: #007fff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Cart = styled(FiShoppingCart)`
    font-size: 1.8rem;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #7ec850;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
    // transition: all 0.2s ease-in-out;
    // background: #fff;
    // color: #010606;
  }
`;



export const NavLinkBlue = styled(Link)`
  border-radius: 4px;
  background: linear-gradient(
    45deg
    ,#69e4be, #388cf7);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;