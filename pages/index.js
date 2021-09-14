import React from 'react';
import Head from 'next/head';
import getUser from '../utils/back';
import Styled from './styles';
import Header from '../components/header';
import Experience from '../components/experience';
import Education from '../components/education';
import Contribution from '../components/contribution';
import Footer from '../components/footer';

const App = ({repoData, user}) => {
  return (
    <Styled.Component >
      <Head>
        <title>Jeandson Tenorio - Fullstack Developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="headerBackground">
        <div className="gradientVertical" />
        <div className="gradientHorizontal" />
      </div>
        

      <Header />
      
      <Experience />

      <Styled.TitleWhite>MY EDUCATION</Styled.TitleWhite>

      <Education />      

      <Styled.TitleWhite>TECH CONTRIBUTIONS</Styled.TitleWhite>

      <Contribution repoData={repoData} user={user}/>      

      <Footer />

    </Styled.Component>
  );
}

export async function getServerSideProps(context) {

  const { repoData, user } = await getUser('jeandsontb');

  return {
    props: {
      currentDate: new Date().toString(),
      repoData,
      user
    }
  }
}

export default App;