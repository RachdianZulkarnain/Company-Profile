import { User } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  user: User | null;
  onAuthSuccess: ({ user }: { user: User }) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      onAuthSuccess: ({ user }) => set(() => ({ user })),
      clearAuth: () => set(() => ({ user: null })),
    }),
    { name: "blog-go-store" }
  )
);
