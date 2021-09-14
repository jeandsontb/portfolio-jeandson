import React from 'react';
import Styled from './style';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <Styled.Header>
        <Styled.LeftHeader>
        <h1>JEANDSON TENORIO</h1>
        <h2>FULLSTACK DEVELOPER AND MOBILE</h2>        

        <div>
          <h2 className="contact">CONTACT</h2>
          <ul>
            <li><FaFacebookSquare className="iconHeader"/></li>
            <li><FaLinkedin className="iconHeader"/></li>
            <li><FaGithub className="iconHeader"/></li>
          </ul>

          <span>Or drop a line: jeandsontb@gmail.com</span>
        </div>
        
        </Styled.LeftHeader>

        <Styled.RightHeader>
          <img src="/images/avatar.png" />
        </Styled.RightHeader>
      </Styled.Header>
  )
}

export default Header;