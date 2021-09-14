import React from 'react';
import Styled from './style';

import colegeCourse from '../../pages/api/getExperience';

const Education = () => {
  return (
    <Styled.BoxContainer>
      <Styled.BoxEducation>
        {colegeCourse[0].higher.map((item, index) => (
          <div key={index}>
            <h2>{item.level}</h2>
            <h3>{item.curse}</h3>
            <p>{item.unity}</p>
          </div>
        ))}
        </Styled.BoxEducation>

        <Styled.BoxTechnician>
          {colegeCourse[0].technician.map((item, index) => (
            <div className="technician" key={index}>
              <h2>{item.level}</h2>
              <h3>{item.curse}</h3>
              <p>{item.unity}</p>
            </div>
          ))}
        </Styled.BoxTechnician>    
      </Styled.BoxContainer>
  );
}

export default Education;