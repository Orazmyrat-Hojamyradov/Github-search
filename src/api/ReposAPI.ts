import { useQuery } from "@tanstack/react-query";

export default function useRepos(username: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["repos", username],
    queryFn: async () => {
      const response = fetch(`https://api.github.com/users/${username}/repos`);

      if (error) {
        throw new Error("Error:" + error);
      }

      const jsonData = (await response).json();
      return jsonData;
    },
  });
  return { data, error, isLoading };
}
