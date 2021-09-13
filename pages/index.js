import React from 'react';
import getUser from '../utils/back';
import Styled from './styles';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

const App = ({repoData, user}) => {
  return (
    <Styled.Component >
      <div className="headerBackground">
        <div className="gradientHorizontal" />
        <div className="gradientVertical" />
      </div>
        
      <Styled.Header>
        <Styled.LeftHeader>
        <h1>JEANDSON TENORIO</h1>
        <h2>FULLSTACK DEVELOPER AND MOBILE</h2>
        <p>
          GitHub stats: public repos: {user.public_repos} 
          / public_gists: {user.public_gists} 
          / followers: {user.followers}
        </p>

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
        <h2 className="font-bold text-3xl">Meus repositórios no GitHub</h2>
        {repoData.map((data) => {
          return (
            <div key={data.id} className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md">
              <h3 className="font-bold">{data.full_name}</h3>
              <p>Language: {data.language} / Stars: {data.stargazers_count}</p>
            </div>
          );
        })}
      </div>
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