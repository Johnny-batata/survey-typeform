import styled from "styled-components";

export const RatingDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
  background: linear-gradient(to right, #f00, #ff0, #0f0);

  input {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    background: #fff;
    color: #000;
    font-size: 20px;
    border-right: 1px solid #000;
  }
  input[type="radio"]:hover ~ label,
  input[type="radio"]:checked ~ label {
    background: transparent;
  }
`;

export const title = styled.div`
  background: red;
`;
