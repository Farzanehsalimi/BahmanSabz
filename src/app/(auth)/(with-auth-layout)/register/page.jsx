"use client";

import { Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <>
      <Heading fontSize={{ base: "2xl", lg: "1.6rem" }}>
        Create an account
      </Heading>
      <Text>
        Already have an account?{" "}
        <Text
          as="span"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => router.push("/signin")}
        >
          Sign in
        </Text>
      </Text>
    </>
  );
}
