import styled from "styled-components";
import theme from "../../css/theme";

export default {
  Experience: styled.div`
    width: 80%;
    margin-left: 10%;
    background-color: ${theme.colors.yellowActive};
    padding: 40px 20px 40px 20px;
    border-radius: 10px;
    box-shadow: 0 0 8px #F29F05;

    h1 {
      font-family: 'Russo One', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 26px;
      text-align: center;
      text-shadow: 0 0 2px #000;
    }

    p {
      font-family: 'Ubuntu', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 18px;
      margin-top: 10px;
      text-align: justify;
    }

    @media screen and (max-width: 780px) {
      width: 96%;
      margin-left: 2%;
      padding: 20px 6px 20px 6px;
      border-radius: 5px;

      h1 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }
  `, 
}