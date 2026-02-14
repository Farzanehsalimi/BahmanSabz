"use client";

import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import { useState } from "react";
import MobileDrawer from "../../components/dashboard/MobileDrawer";

export default function DashboardLayout({ children }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <Flex minH="100vh" bg="#212121" overflowX="hidden">
      <Flex
        border="1px solid #3a3a3a"
        my={{ base: "0px", md: "46px" }}
        mx={{ base: "0px", md: "36px" }}
        borderRadius={{ base: "0", md: "2xl" }}
        bg="#0d0d0d"
        w="100%"
      >
        {/* Mobile Drawer */}
        <Box display={{ base: "block", md: "none" }}>
          <MobileDrawer open={isOpenDrawer} setOpen={setIsOpenDrawer}>
            <Sidebar onClose={() => setIsOpenDrawer(false)} />
          </MobileDrawer>
        </Box>

        {/* Desktop Sidebar */}
        <Box
          w={{ md: "220px", lg: "240px" }}
          display={{ base: "none", md: "block" }}
          borderRight="1px solid #3a3a3a"
        >
          <Sidebar />
        </Box>

        <Flex flex="1" direction="column">
          {/* Navbar */}
          <Box display={{ base: "block", md: "none" }}>
            <Navbar onToggleSidebar={() => setIsOpenDrawer((p) => !p)} />
          </Box>

          {/* Content */}
          <Box flex="1" p="4">
            {children}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
