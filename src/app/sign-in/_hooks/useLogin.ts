import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/auth";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Payload {
  login: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  const { onAuthSuccess } = useAuthStore();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.post<User>(
        "/api/users/login",
        payload
      );
      return data;
    },
    onSuccess: (data) => {
      onAuthSuccess({ user: data });
      toast.success("sign in success");
      router.replace("/blog");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data?.message ?? "Somthing went wrong!");
    },
  });
};

export default useLogin;
