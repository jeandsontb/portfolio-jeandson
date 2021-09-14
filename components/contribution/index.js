import React from 'react';
import { FaStar } from 'react-icons/fa';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { GoGist } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';

import Styled from './style';


const Contribution = ({ repoData, user }) => {
  return (
    <Styled.TechContributions>
      <p className="contributions">
        GitHub stats: 
          <RiGitRepositoryLine /> {user.public_repos} 
          / < GoGist /> {user.public_gists} 
          / <FiUsers /> {user.followers}
      </p>

      <div className="component-tech">
        {repoData.map((data) => {
          return (
            <div className="box-tech" key={data.id} >
              <h3>
                <a href={"https://github.com/"+ data.full_name}>
                  {data.full_name}
                </a>
              </h3>
              <p>
                Language: {data.language} / <FaStar className="inline-block" /> Stars:  {data.stargazers_count}
              </p>
            </div>
          );
        })}
      </div>
    </Styled.TechContributions>
  );
}

export default Contribution;