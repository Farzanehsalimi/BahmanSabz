"use client";

import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = () => {
    document.cookie = "token=; path=/; max-age=0;";

    // delete tan stack query cache
    queryClient.clear();

    router.replace("/signin");
  };

  return { logout };
}
