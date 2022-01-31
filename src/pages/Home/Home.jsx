import React from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Main>
      <S.Wrapper>
        <S.TitleDiv>
          <S.Img
            src="https://www.kpis.tech/assets/images/logo.svg"
            alt="logo"
          />
          <S.Title>Key People Insights</S.Title>
        </S.TitleDiv>
        <S.ContentDiv>
          <h1>
            <strong>Agradecemos pelo dia de trabalho</strong>
            <br />
            <span>Sua opinião é muito importante pra gente 🚀 </span>
          </h1>
          <p>
            PS: Esta pesquisa é anônima. Contamos 100% com a sua colaboração e
            transparência
          </p>
        </S.ContentDiv>
        <S.ButtonDiv>
          <Link to="/form">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0067ac",
              }}
              size="large"
            >
              Começar
            </Button>
          </Link>
        </S.ButtonDiv>
      </S.Wrapper>
    </S.Main>
  );
};

export default Home;
