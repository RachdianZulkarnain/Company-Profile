import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Payload {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.post("/api/users/register", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("sign up success");
      router.push("/sign-in");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data?.message ?? "Somthing went wrong!");
    },
  });
};

export default useRegister;
