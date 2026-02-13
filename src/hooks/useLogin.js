import { useMutation } from "@tanstack/react-query";
import { loginReq } from "@/services/authService";

export function useLogin() {
  return useMutation({
    mutationFn: loginReq,

    // for use middleware I used save token in cookie to send to server
    onSuccess: (data) => {
      document.cookie = `token=${data.token}; path=/;`;
      document.cookie = `username=${data.username}; path=/;`;
    },

    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });
}
