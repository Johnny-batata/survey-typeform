import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import * as S from "./styles";

const Header = () => {
  const location = useLocation();
  const checkLocation = location.pathname.includes("result");

  const handleHeaderContent = () => {
    if (!checkLocation) {
      return (
        <S.HeaderContent>
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <h1>Feedbacks!</h1>
        </S.HeaderContent>
      );
    }
    return (
      <S.HeaderContent>
        <h1 style={{ marginLeft: "10px" }}>Resultado!</h1>
      </S.HeaderContent>
    );
  };
  return <S.Header>{handleHeaderContent()}</S.Header>;
};

export default Header;
