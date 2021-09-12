const getUser = async (username) => {
  const resUser = await fetch('https://api.github.com/users/'+ username);
  const user = await resUser.json();

  const repository = await fetch('https://api.github.com/users/'+ username +'/repos?sort=update');
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
    repoData, 
    user 
  };
}

export default getUser