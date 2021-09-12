import React from 'react';

const App = (props) => {
  return (
    <div>
      <h1>Bem vindo</h1>
      <div>{props.currentDate}</div>
      {props.repoData.map((data) => {
        return (
          <div>
            <h3>{data.full_name}</h3>
            <p>Language: {data.language} / Stars: {data.stargazers_count}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {

  const repository = await fetch('https://api.github.com/users/jeandsontb/repos?sort=update');
  const repoData = await repository.json();

  return {
    props: {
      currentDate: new Date().toString(),
      repoData,
    }
  }
}

export default App;