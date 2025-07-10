import { useAuthStore } from "@/stores/auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export const AuthGuard = (Component: any) => {
  return (props: any) => {
    const { user } = useAuthStore();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);


    if (isLoading) {
        return <Loading/>
    }
    if (!user) {
      return redirect("/sign-in");
    }

    return <Component {...props} />;
  };
};
