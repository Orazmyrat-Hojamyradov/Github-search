import searchIcon from "/icons/search_icon.png";
import "../styles/Search.scss";
import { useState } from "react";
import UserItems from "../types/User";
import { useDebounce } from "../hooks/useDebounce";
import { useStore } from "../store/store";
import useUsers from "../api/UserAPI";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import swal from "sweetalert";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query);
  const { data, isLoading } = useUsers(debouncedQuery);
  const { favs, addToFavs, removeFromFavs } = useStore();

  const handleAddToFavs = (username: string) => {
    if (!favs.includes(username)) {
      addToFavs(username);
      swal({
        text: "Added to favourites",
        icon: "success",
      });
    } else {
      swal({
        text: "User already in favourites",
        icon: "warning",
      });
    }
  };

  const handleRemoveFromFavs = (username: string) => {
    removeFromFavs(username);
    swal({
      text: "User removed from favourites",
      icon: "success",
    });
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

      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : data?.length > 0 ? (
        <div className="search-results-box">
          <ul className="list">
            {data.map((user: UserItems) => (
              <li key={user.id} className="users">
                <a href={user.html_url} className="user-link">
                  {user.login}
                </a>
                {favs.includes(user.login) ? (
                  <FaHeart
                    className="fav"
                    onClick={() => handleRemoveFromFavs(user.login)}
                  />
                ) : (
                  <FaRegHeart
                    className="fav"
                    onClick={() => handleAddToFavs(user.login)}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="def-text">Enter username</p>
      )}
    </>
  );
}
