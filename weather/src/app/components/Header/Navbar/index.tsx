import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

interface Props {}

export function Navbar(props: Props) {
  return (
    <NavbarFrame>
      <NavBtnBox>
        <NavLink exact={true} className="link" to={`favorites`}>
          <FavoritesNavBtn>Favorites</FavoritesNavBtn>
        </NavLink>
        <NavLink exact={true} className="link" to={`/`}>
          <WeatherNavBtn>Weather</WeatherNavBtn>
        </NavLink>
      </NavBtnBox>
    </NavbarFrame>
  );
}

const NavbarFrame = styled.div``;
const NavBtnBox = styled.div`
  @media (max-width: 768px) {
    width: 170px;
    margin-left: 90px;
    float: left;
  }
  float: right;
  display: flex;
  width: 300px;
  justify-content: space-between;
  * {
    text-decoration: none;
    color: unset;
  }
`;
const FavoritesNavBtn = styled.div`
  box-shadow: 0px 10px 14px -7px #3e7327;
  background: linear-gradient(to bottom, #438522 5%, #52803b 100%);
  background-color: #438522;
  border-radius: 4px;
  border: 1px solid #4b8f29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 36px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #5b8a3c;
  &:hover {
    background: linear-gradient(to bottom, #52803b 5%, #438522 100%);
    background-color: #52803b;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 16px;
  }
`;
const WeatherNavBtn = styled.div`
  box-shadow: 0px 10px 14px -7px #9fb4f2;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
  background-color: #7892c2;
  border-radius: 4px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 36px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 16px;
  }
  &:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
