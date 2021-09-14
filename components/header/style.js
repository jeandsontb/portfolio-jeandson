import styled from 'styled-components';
import theme from '../../css/theme';

export default {
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
        padding-bottom: 10px;

        ul {
          margin: 0px;
          margin-bottom: 5px;

          .iconHeader {
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
      height: 450px;
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
}