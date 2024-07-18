import "../styles/UserCard.scss";
import { FaRegHeart } from "react-icons/fa6";

interface ICardProps {
  repoName: string;
  forks: number;
  watchers: number;
  repo_link: string;
}

export default function UserCard({
  repoName,
  forks,
  watchers,
  repo_link,
}: ICardProps) {
  return (
    <div className="card">
      <h3 className="repo-name">{repoName}</h3>
      <div className="section-1">
        <p className="forks">Forks: {forks}</p>
        <p className="watchers">Watchers: {watchers}</p>
      </div>
      <div className="section-2">
        <FaRegHeart size="1.5rem" />
        <a href={repo_link} className="link">
          <button className="repo-link">Go to repo</button>
        </a>
      </div>
    </div>
  );
}
