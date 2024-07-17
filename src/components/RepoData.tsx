import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";
import Search from "./Search";



export default function RepoData (user:any){
    // const { isPending, error, data } = useQuery({
    //   queryKey: ["repoData"],
    //   queryFn: async () => {
    //     const response = await fetch(
    //       `https://api.github.com/repos/${user.login}`
    //     );
    //     return await response.json();
    //   },
    // });
  
    // if (isPending) return "Loading...";
  
    // if (error) return "An error occurred: " + error.message;
  
    return (
      <div className="main-content">
        <Search />
        {/* <UserCard
          repoName={data.full_name}
          forks={data.forks_count}
          watchers={data.subscribers_count}
          repo_link={data.html_url} /> */}
      </div>
    );
  };