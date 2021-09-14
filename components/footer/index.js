import React from 'react';
import Styled from './style';

const Footer = () => {
  return (
    <Styled.Container>
      <h3>
        Portfolio developed with NextJS + SSR (Server Side Rendering)
      </h3>
      <a href="https://github.com/jeandsontb">
        https://github.com/jeandsontb
      </a>
    </Styled.Container>
  );
}

export default Footer;