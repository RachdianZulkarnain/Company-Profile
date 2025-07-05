import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Blog[]>(
        "/api/data/Blogs?sortBy=%60created%60%20desc"
      );
      return data;
    },
  });
};

export default useGetBlogs;
