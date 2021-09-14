import styled from "styled-components";
import theme from "../../css/theme";

export default {
  BoxEducation: styled.div`
    display: flex;
    width: 80%;
    margin-left: 10%;
    background-color: ${theme.colors.yellowActive};
    padding: 30px 15px 30px 15px;
    border-radius: 10px;
    box-shadow: 0 0 8px #F29F05;

    div {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    h2 {
      font-family: 'Russo One', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 20px;
      text-shadow: 0 0 2px #000;
    }

    h3 {
      font-family: 'Ubuntu', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 18px;
      font-weight: 700;
    }

    p {
      font-family: 'Ubuntu', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 16px;
    }

    @media screen and (max-width: 780px) {
      flex-direction: column;
      width: 96%;
      margin-left: 2%;
      padding: 20px 6px 5px 6px;
      border-radius: 10px;
      box-shadow: 0 0 8px #F29F05;

      div {
        margin-bottom: 15px;
      }

      h2 {
        font-size: 18px;
      }

      h3 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
  `,
}