import React from 'react';

const App = (props) => {
  return (
    <div>
      <h1>Bem vindo</h1>
      <div>{props.currentDate}</div>
      {props.repoData.map((data) => {
        return (
          <div key={data.id}>
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
  const originalRepoData = await repository.json();

  const dontShowRepoData = ['jeandsontb/reality-card'];

  const filterShowRepoData = (repo) => dontShowRepoData.indexOf(repo.full_name) === -1;
  const isNotFork = (repo) => !repo.fork;
  const extractRepoData = (repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count
  })

  const repoData = originalRepoData
                      .filter(isNotFork)
                      .filter(filterShowRepoData)
                      .map(extractRepoData);

  return {
    props: {
      currentDate: new Date().toString(),
      repoData,
    }
  }
}

export default App;