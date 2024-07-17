import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../styles/Home.scss";
import RepoData from "../components/RepoData";



export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-box">
        <RepoData />
      </div>
    </QueryClientProvider>
  );
}
