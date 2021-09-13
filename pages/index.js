import React from 'react';
import Head from 'next/head';
import getUser from '../utils/back';
import Styled from './styles';
import { FaFacebookSquare, FaLinkedin, FaGithub, FaStar } from 'react-icons/fa';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { GoGist } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';

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
        <div className="gradientHorizontal" />
        <div className="gradientVertical" />
      </div>
        
      <Styled.Header>
        <Styled.LeftHeader>
        <h1>JEANDSON TENORIO</h1>
        <h2>FULLSTACK DEVELOPER AND MOBILE</h2>        

        <div>
          <h2 className="contact">CONTACT</h2>
          <ul>
            <li><FaFacebookSquare className="text-6xl" style={{color:'#FFFFFF'}}/></li>
            <li><FaLinkedin className="text-6xl" style={{color:'#FFFFFF'}}/></li>
            <li><FaGithub className="text-6xl" style={{color:'#FFFFFF'}}/></li>
          </ul>

          <span>Or drop a line: jeandsontb@gmail.com</span>
        </div>
        
        </Styled.LeftHeader>

        <Styled.RightHeader>
          <img src="/images/avatar.png" />
        </Styled.RightHeader>
      </Styled.Header>

      <Styled.Experience>
        <h1>WHAT I DO</h1>
        <p>Fullstack Developer</p>
      </Styled.Experience>

      <Styled.TitleWhite>MY EDUCATION</Styled.TitleWhite>

      <Styled.BoxEducation>
        <div>
          <h2>SPECIALIST DEGREE</h2>
          <h3>FULLSTACK WEB DEVELOPMENT</h3>
          <p>UNYLEYA</p>
        </div>
        <div>
          <h2>GRADUATION DEGREE</h2>
          <h3>WEB DESIGN AND PROGRAMMING</h3>
          <p>UNISUL - university south of santa catarina</p>
        </div>        
      </Styled.BoxEducation>
      

      <div className="container mx-auto">

      <Styled.TitleWhite>TECH CONTRIBUTIONS</Styled.TitleWhite>

        <p className="text-1xl font-bold text-center uppercase mt-10 text-white" style={{marginTop: -30}} >
          GitHub stats: <RiGitRepositoryLine className="inline-block" /> {user.public_repos} 
          / < GoGist className="inline-block"/> {user.public_gists} 
          / <FiUsers className="inline-block" /> {user.followers}
        </p>

        <div className="grid grid-cols-3 gap-4 my-6">
          {repoData.map((data) => {
            return (
              <div key={data.id} className="rounded bg-gray-200 p-4 hover:shadow-md">
                <h3 className="font-bold hover:underline">
                  <a href={"https://github.com/"+ data.full_name}>{data.full_name}
                  </a>
                </h3>
                <p>
                  Language: {data.language} / <FaStar className="inline-block" /> Stars:  {data.stargazers_count}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Styled.Footer>

      </Styled.Footer>
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