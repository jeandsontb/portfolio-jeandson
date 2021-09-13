import React from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../css/global';
import theme from '../css/theme';
import Layout from '../components/layout';
import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>

          <Component {...pageProps} />

        </Layout>
      </ThemeProvider>

    </React.Fragment>
  )
}

export default MyApp