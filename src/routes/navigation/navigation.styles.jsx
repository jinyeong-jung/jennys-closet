import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  margin-bottom: 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 25px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
