import React from 'react';
import getUser from '../utils/back';

const App = ({repoData, user}) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Jeandson meus repositorios</h1>
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