import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface Payload {
  title: string;
  category: string;
  description: string;
  content: string;
  thumbnail: File | null;
}

const useCreateBlog = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const form = new FormData();

      form.set("file", payload.thumbnail!);

      const randomId = Date.now() + Math.floor(Math.random() * 1000);
      const resultThumbnail = await axiosInstance.post<{
        fileURL: string;
        filePath: string;
      }>(
        `/api/files/blog-images/${randomId}`, //path folder
        form
      );

      await axiosInstance.post("/api/data/Blogs", {
        title: payload.title,
        category: payload.category,
        description: payload.description,
        content: payload.content,
        thumbnail: resultThumbnail.data.fileURL,
      });
    },
    onSuccess: async () => {
      alert("create blog succes");
      await queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.push("/");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      alert(error.response?.data.message ?? "somenting went wrong!");
    },
  });
};

export default useCreateBlog;
