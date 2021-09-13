import styled from 'styled-components';

const  background = '/images/background.gif';

const Styled = {
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

    p {
      color: #FFFFFF;
      font-size: 18px;
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
  `, 

}

export default Styled;