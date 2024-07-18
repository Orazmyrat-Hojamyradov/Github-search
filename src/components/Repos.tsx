import useRepos from "../api/ReposAPI";
import IRepo from "../types/Repo";
import UserCard from "./UserCard";

export default function Repos({ username }: any) {
  const { data, error, isLoading } = useRepos(username);

  if (isLoading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p>Error fetching repositories: {error.message}</p>;
  }

  if (!data?.length) {
    return <p>No repositories found for {username}.</p>;
  }

  return (
    <>
      {data.map((repo: IRepo) => (
        <UserCard
          key={repo.id}
          repoName={repo.name}
          forks={repo.forks_count}
          watchers={repo.watchers_count}
          repo_link={repo.html_url}
        />
      ))}
    </>
  );
}
