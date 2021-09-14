import styled from "styled-components";
import theme from "../../css/theme";

export default {
  BoxContainer: styled.div`
    width: 80%;
    margin-left: 10%;
    background-color: ${theme.colors.yellowActive};
    padding: 30px 15px 30px 15px;
    border-radius: 10px;
    box-shadow: 0 0 8px #F29F05;

    h2 {
      font-family: 'Russo One', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 28px;
      text-shadow: 0 0 2px #000;
    }

    h3 {
      font-family: 'Ubuntu', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 18px;      
    }

    p {
      font-family: 'Ubuntu', sans-serif;
      color: ${theme.colors.browRelative};
      font-size: 16px;
      font-weight: 700;
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
  BoxEducation: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    margin-top: 30px;

    @media screen and (max-width: 780px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  BoxTechnician: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    margin-top: 30px;

    .technician {
      background-color: ${theme.colors.yellowBurned};
      padding: 10px;
      border-radius: 4px;
    }

    @media screen and (max-width: 780px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 0px;
    }
  `,
}