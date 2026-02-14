"use client";

import { VStack, Text, Button, Flex } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { PiUsersThree } from "react-icons/pi";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useLogout } from "@/hooks/useLogout";
import { useState, useEffect } from "react";
import truncateText from "@/utils/truncateText";

export default function Sidebar({ onClose }) {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useLogout();

  const [username, setUsername] = useState("Account");

  useEffect(() => {
    if (typeof document !== "undefined") {
      const cookieUsername = document.cookie
        .split("; ")
        .find((row) => row.startsWith("username="))
        ?.split("=")[1];

      if (cookieUsername) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUsername(cookieUsername);
      }
    }
  }, []);

  const navItems = [
    {
      label: username,
      path: "/dashboard/account",
      icon: <IoPersonCircleOutline size="19px" />,
    },
    {
      label: "Users",
      path: "/dashboard/users",
      icon: <PiUsersThree size="19px" />,
    },
    {
      label: "Products",
      path: "/dashboard/products",
      icon: <RiShoppingBagLine size="19px" />,
    },
    {
      label: "Games",
      path: "/dashboard/games",
      icon: <IoGameControllerOutline size="19px" />,
    },
  ];

  return (
    <VStack align="stretch" p="2">
      <Text mt={5} pl={4} fontSize={14}>
        Dashboard
      </Text>
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Flex
            key={item.path}
            cursor="pointer"
            fontWeight="bold"
            align="center"
            gap="8px"
            fontSize="14px"
            _hover={{ bg: "#212121" }}
            px="4"
            py="1"
            borderRadius="lg"
            border={isActive ? "1px solid #3a3a3a" : "1px solid transparent"}
            shadow={isActive ? "inset" : "none"}
            onClick={() => {
              router.push(item.path);
              onClose?.();
            }}
          >
            {item.icon} {truncateText(item.label, 18)}
          </Flex>
        );
      })}

      <Button
        onClick={logout}
        mt={{ base: "205px", md: "170px", lg: "235px" }}
        h="33px"
        border="none"
        borderRadius="xl"
        colorScheme="red"
        variant="outline"
        bg="#212121/50"
        _hover={{ bg: "#212121/80" }}
        w="70%"
        alignSelf="center"
      >
        Logout
      </Button>
    </VStack>
  );
}
