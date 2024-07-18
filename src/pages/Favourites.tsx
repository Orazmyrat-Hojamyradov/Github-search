import "../styles/Favourites.scss";

interface FavouritesProps {
  favs: string[];
}

export default function Favourites({ favs }: FavouritesProps) {
  return (
    <div className="favs">
      <h1 className="fav-title">Favourites</h1>
      {favs.length > 0 ? (
        <ul className="fav-list">
          {favs.map((username) => (
            <>
              <a className="fav-link" href={`https://github.com/${username}`}>
                <li className="fav-list-user" key={username}>
                  {username}
                </li>
              </a>

              <a href={`https://github.com/${username}?tab=repositories`}>
                <button className="repo-link-btn">Go to repo</button>
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
