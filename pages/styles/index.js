import styled from 'styled-components';
import theme from '../../css/theme';

const  background = '/images/background.gif';

export default {
  Component: styled.div`
    .headerBackground {
      background-image: url(${background});
      width: 100%;
      height: 480px;
    } 
    .gradientVertical {
      background: rgb(19,26,64);
      background: linear-gradient(45deg, rgba(19,26,64,0.7707457983193278) 32%, rgba(0,0,0,0) 100%);
      width: 100%;
      height: 480px;
    }
    .gradientHorizontal {
      background: rgb(19,26,64);
      background: linear-gradient(360deg, rgba(19,26,64,1) 5%, rgba(0,0,0,0) 100%);
      width: 100%;
      height: 480px;
      margin-top: -480px;
    }
  `,
  TitleWhite: styled.div`
    font-family: 'Russo One', sans-serif;
    color: #FFFFFF;
    font-size: 26px;
    text-align: center;
    text-shadow: 0 0 2px #000;
    margin-top: 60px;
    margin-bottom: 30px;

    @media screen and (max-width: 780px) {
      margin-top: 40px;
      margin-bottom: 15px;
    }
  `,
  Footer: styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100px;
    background-color: ${theme.colors.OrangeStrong};
  `,
}