import Search from "../components/Search";
import UserCard from "../components/UserCard";
import "../styles/Main.scss";

export default function Main() {
  return (
    <div className="main-box">
      <div className="main-content">
        <Search />
        <UserCard/>
      </div>
    </div>
  );
}
