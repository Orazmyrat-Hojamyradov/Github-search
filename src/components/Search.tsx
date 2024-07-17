import searchIcon from "/icons/search_icon.png";
import "../styles/Search.scss";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import UserItems from "../types/User";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query);

  const { isLoading, error, data } = useQuery({
    queryKey: ["users", debouncedQuery],
    enabled: !!debouncedQuery,
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${debouncedQuery}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const jsonData = await response.json();
      return jsonData.items;
    },
  });


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
        ): data?.length > 0 ? (
          <ul className="list">
            {data.map((user: UserItems) => (
              <li key={user.id} className="users">
                <a href={user.html_url} className="user-link">
                  {user.login}
                </a>
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
