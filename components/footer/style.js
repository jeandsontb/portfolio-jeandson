import styled from "styled-components";
import theme from "../../css/theme";

export default {
  Container: styled.footer`
    background-color: ${theme.colors.OrangeStrong};
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 18px;
      margin-bottom: 10px;
      color: ${theme.colors.browStrong};
      text-align: center;
    }

    a {
      font-family: 'Ubuntu', sans-serif;
      font-size: 15px;
      margin-bottom: 10px;
      color: ${theme.colors.browStrong};
      
      :hover {
        text-decoration: underline;
      }
    }
  `,
}