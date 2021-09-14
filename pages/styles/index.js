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
    .gradientHorizontal {
      background: rgb(19,26,64);
      background: linear-gradient(45deg, rgba(19,26,64,0.7707457983193278) 32%, rgba(0,0,0,0) 100%);
      width: 100%;
      height: 480px;
    }
    .gradientVertical {
      background: rgb(19,26,64);
      background: linear-gradient(360deg, rgba(19,26,64,1) 5%, rgba(0,0,0,0) 100%);
      width: 100%;
      height: 480px;
      margin-top: -480px;
    }
  `,
  Header: styled.div`
    display: flex;
    flex: 1;
    width: 80%;
    margin-left: 10%;
    height: 480px;
    margin-top: -500px;

    @media screen and (max-width: 780px) {
      width: 90%;
      margin-left: 5%;
    }
  `,
  LeftHeader: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: #FFFFFF;
      font-size: 28px;
      font-family: 'Train One', sans-serif;
    }

    h2 {
      color: #FFFFFF;
      font-size: 34px;
      font-family: 'Russo One', sans-serif;
    }

    div {
      margin-top: 20px;
      border: 1px solid ${theme.colors.yellowActive};
      border-radius: 5px;
      padding: 20px 10px;
      width: 280px;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 15px;
      margin-bottom: 10px;

      .iconHeader {
        color: #FFFFFF;
        width: 60px;
        height: 60px;
      }
    }

    span {
      font-family: 'Ubuntu', sans-serif;
      color: #FFF;
      font-size: 14px;
    }


      .contact {
        font-family: 'Russo One', sans-serif;
        color: #FFFFFF;
        font-size: 18px;
        width: 120px;
        background-color: ${theme.colors.browRelative};
        margin-left: 20px;
        text-align: center;
        margin-top: -35px;
        margin-bottom:15px;
      }
    }

    @media screen and (max-width: 780px) {
      h1 {
        font-size: 16px;
      }
      h2 {
        font-size: 20px;
      }
      div {
        width: auto;

        ul {
          margin: 0px;
          margin-bottom: 5px;

          .iconHeader {
            color: #FFFFFF;
            width: 30px;
            height: 30px;
          }
        }

        span {
          font-size: 11px;
        }

        .contact {
          font-size: 12px;
          width: 90px;
          margin-left: 10px;
          margin-top: -30px;
          margin-bottom:8px;
        }
      }      
    }
  `,
  RightHeader: styled.div`
    position: relative;
    width: 400px;
    height: 480px;

    img {
      height: 400px;
      position: absolute;
      bottom: 0;
    }

    @media screen and (max-width: 780px) {
      img {
        height: auto;
        right: 0;
      }
    }
  `,
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
  Footer: styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100px;
    background-color: ${theme.colors.OrangeStrong};
  `,
}