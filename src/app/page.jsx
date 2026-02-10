"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Flex
      minH="100vh"
      align="center"
      direction="column"
      justify="center"
      bg="#0d0d0d"
      gap={10}
    >
      <Text fontWeight="semibold" fontSize={{ base: "2xl", lg: "4xl" }}>
        Play & Shop
      </Text>
      <Button
        borderRadius="lg"
        fontSize={16}
        onClick={() => router.push("/signin")}
      >
        Sign In
      </Button>
    </Flex>
  );
}
