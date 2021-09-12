import React from 'react';

const App = ({repoData, user}) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Jeandson</h1>
      <p>GitHub stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
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
  );
}

export async function getServerSideProps(context) {

  const resUser = await fetch('https://api.github.com/users/jeandsontb');
  const user = await resUser.json();

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
      user
    }
  }
}

export default App;