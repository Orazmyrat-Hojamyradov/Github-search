import searchIcon from "/icons/search_icon.png";
import "../styles/Search.scss";
import { useRef, useState } from "react";

export default function Search() {
  const [items, setItems] = useState(["one", "two", "three"]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = items.filter((item) => {
    // return items.toLowerCase().includes(query.toLowerCase());
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
      </div>
    </>
  );
}
