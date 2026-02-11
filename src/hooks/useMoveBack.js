import { useRouter } from "next/navigation";

export default function useMoveBack(to = "/signin") {
  const router = useRouter();
  return () => router.push(to);
}
