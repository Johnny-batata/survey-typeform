import styled from "styled-components";

export const Img = styled.img`
  width: 47px;
`;

export const Wrapper = styled.section`
  text-align: center;
  margin: 0px auto;
  max-width: 720px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin-left: 5px;
  color: rgb(255, 255, 255);
`;

export const TitleDiv = styled.div`
  display: flex;
  height: 270px;
  justify-content: center;
  align-items: center;
`;

export const ContentDiv = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  height: 270px;
  flex-direction: column;
  height: auto;

  h1 {
    font-weight: unset;
  }
  span {
    font-weight: unset;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 40px;
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #4282a5;

  @media (max-width: 439px) {
    ${Title} {
      font-size: 28px;
    }
    ${ContentDiv} {
      font-size: 0.9em;
    }
  }
  @media (max-width: 394px) {
    ${Title} {
      font-size: 23px;
    }
    ${Img} {
      width: 35px;
    }
  }

  a {
    text-decoration: none;
  }
`;
