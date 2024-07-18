import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "../components/Search";
import "../styles/Home.scss"

interface HomeProps {
  favs: string[];
  setFavs: (favs: string[]) => void;
}

function Home({ favs, setFavs }: HomeProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-box">
        <div className="main-content">
          <Search favs={favs} setFavs={setFavs} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default Home;
