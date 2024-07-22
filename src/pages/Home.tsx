import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "../components/Search";
import "../styles/Home.scss";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-box">
        <div className="main-content">
          <Search />
        </div>
      </div>
    </QueryClientProvider>
  );
}
