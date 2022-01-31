import styled from "styled-components";

export const Header = styled.header`
  height: 50px;
  height: 84px;
  box-shadow: 0px 0px 16px #33333336;
  background: #4a90b7;
`;

export const HeaderContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  svg {
    font-size: 35px;
    font-weight: bold;
    margin-right: 15px;
    margin-left: 5px;
    color: white;
  }
  h1 {
    color: white;
  }
`;
