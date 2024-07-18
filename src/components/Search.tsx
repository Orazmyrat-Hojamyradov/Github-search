import searchIcon from "/icons/search_icon.png";
import "../styles/Search.scss";
import { useState } from "react";
import UserItems from "../types/User";
import { useDebounce } from "../hooks/useDebounce";
import useUsers from "../api/UserAPI";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import swal from "sweetalert";

interface SearchProps {
  favs: string[];
  setFavs: (favs: string[]) => void;
}

export default function Search({ favs, setFavs }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query);
  const { data, isLoading } = useUsers(debouncedQuery);

  const handleAddToFavs = (username: string) => {
    if (!favs.includes(username)) {
      setFavs([...favs, username]);
      swal({
        text: 'Added to favourites',
        icon: 'success',
      });
    } else {
      swal({
        text: 'User already in favourites',
        icon: 'warning',
      });
    }
  };

  const handleRemoveFromFavs = (username: string) => {
    const updatedFavs = favs.filter((fav) => fav !== username);
    setFavs(updatedFavs);
  };

  return (
    <>
      <div className="search-box">
        <img src={searchIcon} alt="search" className="searchIcon" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="search"
          placeholder="Search User"
        />
      </div>
      <div className="search-results-box">
        {isLoading ? (
          <p>Loading...</p>
        ) : data?.length > 0 ? (
          <ul className="list">
            {data.map((user: UserItems) => (
              <li key={user.id} className="users">
                <a href={user.html_url} className="user-link">
                  {user.login}
                </a>
                <a href={user.html_url} className="user-link">
                  <button className="repo-link">Go to Github</button>
                </a>
                {favs.includes(user.login) ? (
                  <FaHeart className="fav" onClick={() => handleRemoveFromFavs(user.login)} />
                ) : (
                  <FaRegHeart className="fav" onClick={() => handleAddToFavs(user.login)} />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No user matched or enter a valid username</p>
        )}
      </div>
    </>
  );
}
