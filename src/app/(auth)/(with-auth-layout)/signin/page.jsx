"use client";

import { Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  return (
    <>
      <Heading fontSize={{ base: "2xl", lg: "1.6rem" }}>Sign In</Heading>
      <Text>
        Don't have an account?{" "}
        <Text
          as="span"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => router.push("/register")}
        >
          Sign up for free
        </Text>
      </Text>
    </>
  );
}
