import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blog";
import { cache } from "react";

export const getBlog = cache(async (objectId: string) => {
  const { data } = await axiosInstance.get<Blog>(`/api/data/Blogs/${objectId}`);
  return data;
});
