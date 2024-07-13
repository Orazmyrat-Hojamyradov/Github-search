import github_icon from "/icons/github-mark-white.png";
import "../styles/NavBar.scss";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={github_icon} alt="Github icon" draggable={false}/>

        <div className="navbar-links">
          <ul className="links-list">
            <li>
              <a className="link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Favourites
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
