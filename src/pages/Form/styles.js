import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: #4282a5;
`;
export const Wrapper = styled.section`
  text-align: center;
  margin: 0px auto;
  max-width: 720px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* width: 100%; */
  width: auto;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  align-items: flex-start;

  span {
    color: white;
  }
`;

export const Question = styled.h1`
  color: white;
  font-size: 2em;
`;
