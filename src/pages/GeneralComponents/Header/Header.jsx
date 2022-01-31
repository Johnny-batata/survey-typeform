import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        <h1>Feedbacks!</h1>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
