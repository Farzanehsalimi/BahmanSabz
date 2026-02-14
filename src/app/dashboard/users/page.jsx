"use client";

import UsersTable from "@/components/dashboard/UsersTable";
import { Flex, Text } from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";

export default function UsersPage() {
  return (
    <>
      <Flex align="center" justify="space-between" my="25px">
        <Text fontSize="30px">Users</Text>
        {/* for dark mode theme in future */}
        <Text mr="6px" display={{ base: "none", md: "flex" }}>
          <BsSun size="22px" cursor="pointer" color="#FAB95B" />
        </Text>
      </Flex>
      <UsersTable />
    </>
  );
}
