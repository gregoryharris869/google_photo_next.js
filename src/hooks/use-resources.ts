import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CloudinaryResource } from "@/types/cloudinary";

interface UseResources {
  initialResources?: Array<CloudinaryResource>;
}

export function useResources(options?: UseResources) {
  const queryClient = useQueryClient();
  const { data: resources } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const { data } = await fetch("/api/resources").then((r) => r.json());
      return data;
    },
    initialData: options?.initialResources,
  });

  function addResources(results: Array<CloudinaryResource>) {
    queryClient.setQueryData(
      ["resources"],
      (old: Array<CloudinaryResource>) => [...results, ...old]
    );
    queryClient.invalidateQueries({
      queryKey: ["resources"],
    });
  }
  return {
    resources,
    addResources,
  };
  console.log("resources", resources);
}
