"use client";

import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  HStack,
  Separator,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toaster } from "@/components/ui/toaster";
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdOutlineFacebook } from "react-icons/md";

export default function AuthLayout({ children }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!email) {
      toaster.create({
        title: "Enter email first!",
        type: "error",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toaster.create({
        title: "code sent.",
        type: "success",
      });

      router.push("/verify");
    }, 1200);
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="#0d0d0d"
      color="white"
      px="10px"
    >
      <Box w="100%" maxW="420px" p={{ base: "5px", lg: "30px" }}>
        <VStack align="stretch" gap="20px">
          {children}

          <VStack gap="8px">
            {/* NOTE: Social login is intentionally not implemented (UI-only for
            demo) */}
            <Button
              borderColor="gray.600"
              borderRadius="xl"
              fontSize={{ base: "sm", lg: "md" }}
              size={{ base: "sm", lg: "md" }}
              variant="outline"
              w="100%"
            >
              <PiGithubLogoLight color="white" size="30px" />
              Continue with GitHub
            </Button>
            <Button
              borderColor="gray.600"
              borderRadius="xl"
              fontSize={{ base: "sm", lg: "md" }}
              size={{ base: "sm", lg: "md" }}
              variant="outline"
              w="100%"
            >
              <FcGoogle color="white" size="30px" />
              Continue with Google
            </Button>
            <Button
              borderColor="gray.600"
              borderRadius="xl"
              fontSize={{ base: "sm", lg: "md" }}
              size={{ base: "sm", lg: "md" }}
              variant="outline"
              w="100%"
            >
              <MdOutlineFacebook color="#1877F2" size="30px" />
              Continue with Facebook
            </Button>
          </VStack>

          <HStack>
            <Separator flex="1" />
            <Text flexShrink="0" color="gray.400">
              Or with your email
            </Text>
            <Separator flex="1" />
          </HStack>

          <HStack as="form">
            <Input
              placeholder="email@company.com"
              _placeholder={{
                color: "#79716b",
              }}
              size={{ base: "sm", lg: "md" }}
              fontSize={{ base: "12px", lg: "17px" }}
              borderRadius="lg"
              borderColor="#79716b/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              _focus={{
                borderColor: "#f97316",
                boxShadow: "0 0 0 1px #f97316",
              }}
            />
            <Button
              type="submit"
              bg="#f97316"
              _hover={{ bg: "#ea580c" }}
              borderRadius="lg"
              color="white"
              size={{ base: "sm", lg: "40px" }}
              fontSize={{ base: "14px", lg: "17px" }}
              onClick={handleLogin}
              disabled={loading}
              minW="115px"
            >
              {loading ? (
                <HStack justify="center" w="100%">
                  <Spinner
                    color="white"
                    thickness="3px"
                    size="xs"
                    sx={{ borderStyle: "solid" }}
                  />
                  <Text>Loading</Text>
                </HStack>
              ) : (
                "Submit"
              )}
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}
