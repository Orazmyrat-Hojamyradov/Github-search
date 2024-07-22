import "../styles/Favourites.scss";
import { useStore } from "../store/store";

export default function Favourites() {
  const { favs } = useStore();
  return (
    <div className="favs">
      <h1 className="fav-title">Favourites</h1>
      {favs.length > 0 ? (
        <ul className="fav-list" >
          {favs.map((username) => (
            <>
              <a className="fav-link" href={`https://github.com/${username}`}>
                <li className="fav-list-user" key={username}>
                  {username}
                </li>
              </a>
              <a href={`https://github.com/${username}?tab=repositories`}>
                <button className="repo-link-btn">Go to repos</button>
              </a>
            </>
          ))}
        </ul>
      ) : (
        <p>No users in favourites yet.</p>
      )}
    </div>
  );
}
