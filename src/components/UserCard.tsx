import "../styles/UserCard.scss";
import { FaRegHeart } from "react-icons/fa6";

export default function UserCard() {
  return (
    <div className="card">
      <h3 className="repo-name">placeholder</h3>
      <div className="section-1">
        <p className="forks">Forks: 1</p>
        <p className="watchers">Watchers: 1</p>
      </div>
      <div className="section-2">
        <FaRegHeart size="1.5rem"/>
        <button className="repo-link">Repo link here</button>
      </div>
    </div>
  );
}
