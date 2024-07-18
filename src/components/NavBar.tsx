import github_icon from "/icons/github-mark-white.png";
import "../styles/NavBar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={github_icon} alt="Github icon" draggable={false}/>

        <div className="navbar-links">
          <ul className="links-list">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/favourites">
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
