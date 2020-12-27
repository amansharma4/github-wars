export const getRepos = (language) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const getUserData = (username) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const getRepo = (username) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const getUserScore = async (username) => {
  let response;
  let count = 0;
  await getRepo(username).then((res) => (response = res));
  Object.values(response).forEach((item) => {
    count += item.stargazers_count;
  });
  await getUserData(username).then((res) => (count += res.followers));
  return count;
};
