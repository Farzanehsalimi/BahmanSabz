"use client";

import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";

export default function Navbar({ onToggleSidebar }) {
  return (
    <Flex
      h={{ base: "60px", lg: "70px" }}
      align="center"
      justify="space-between"
      bg="#0d0d0d"
    >
      <Button onClick={onToggleSidebar} bg="#0d0d0d">
        <Icon as={CgMenuGridO} color="white" boxSize="8" />
      </Button>
      <Text mr="18px" display={{ base: "flex" }}>
        <BsSun size="22px" cursor="pointer" color="#FAB95B" />
      </Text>
    </Flex>
  );
}
