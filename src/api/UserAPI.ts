import { useQuery } from "@tanstack/react-query";

export default function useUsers(debouncedQuery: string) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["users", debouncedQuery],
    enabled: !!debouncedQuery,
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${debouncedQuery}`
      );

      if (error) {
        throw new Error(`Error: ${error}`);
      }

      const jsonData = await response.json();
      return jsonData.items;
    },
  });

  return { isLoading, error, data };
}
