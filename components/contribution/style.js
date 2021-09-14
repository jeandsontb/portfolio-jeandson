import styled from "styled-components";
import theme from "../../css/theme";

export default {
  TechContributions: styled.div`
    width: 94%;
    margin-left: 3%;
    padding-bottom: 40px;

    .contributions {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Ubuntu', sans-serif;
      font-size: 18px;
      color: #FFFFFF;
    }
    .component-tech {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 15px;
      margin-top: 30px;
    }
    .box-tech {
      background-color: ${theme.colors.grayClean};
      padding: 10px;
      border-radius: 5px;
      transition: all ease 0.1s;

      :hover {
        box-shadow: 0 0 4px #FFFFFF;
      }
    }

    h3 {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 700;
      color: ${theme.colors.browStrong};
    }

    a {
      :hover {
        text-decoration: underline;
      }
    }

    p {
      font-family: 'Ubuntu', sans-serif;
      font-size: 14px;
      color: ${theme.colors.browStrong};
    }

    @media screen and (max-width: 780px) {
      
      .component-tech {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 1px;
      }
      .box-tech {
        margin-bottom: 6px;
      }
      
    }

  `,
}