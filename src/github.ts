import type { GithubData } from "./@types/types";

export const getRepos = async (user: string) => {
  const repos: GithubData[] =
    (await (await fetch(`https://api.github.com/users/${user}/repos`)).json());

  return Promise.resolve(
    repos.sort((x, y) => {
      return y.stargazers_count - x.stargazers_count;
    }),
  );
};
