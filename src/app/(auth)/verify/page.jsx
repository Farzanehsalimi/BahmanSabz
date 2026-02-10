"use client";

import OtpInput from "@/components/ui/OtpInput";
import { toaster } from "@/components/ui/toaster";
import useMoveBack from "@/hooks/useMoveBack";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

export default function verify() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const moveBack = useMoveBack();

  const handleSubmit = () => {
    if (otp.length !== 6) {
      toaster.create({
        title: "Fill 6 Number!",
        type: "error",
      });
      return;
    }

    setLoading(true);
    if (otp.length === 6) {
      setTimeout(() => {
        setLoading(false);

        toaster.create({
          title: "YOU Successfully Login! 🎉",
          type: "success",
        });

        router.push("/dashboard");
      }, 1200);
    }
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
      <Box w="100%" maxW="420px" p={{ base: "5px", sm: "18px", lg: "18px" }}>
        <VStack align="stretch" gap={{ base: "26px", lg: "24px" }}>
          <Flex gap="4" justify="space-between" align="center">
            <Heading fontSize={{ base: "2xl", lg: "1.7rem" }}>
              Verify OTP
            </Heading>
            <Text onClick={moveBack}>
              <IoArrowForward
                cursor="pointer"
                color="#7e7f81"
                size="25px"
                pl="2px"
              />
            </Text>
          </Flex>
          <HStack
            bg="#131b16"
            border="1px solid"
            borderColor="#168d5a"
            borderRadius="2xl"
            p={{ base: "2", lg: "4" }}
            spacing="3"
            mb={{ base: "3", lg: "5" }}
          >
            <IoCheckboxOutline color="#168d5a" size="25px" />
            <Text
              fontSize={{ base: "sm", lg: "md" }}
              fontWeight="semibold"
              color="gray.300"
            >
              For demo purposes, use code: 123456
            </Text>
          </HStack>
          <Heading fontSize={{ base: "1xl", lg: "1.2rem" }}>
            Login code:
          </Heading>

          <OtpInput value={otp} onChange={setOtp} />
          <Button
            w="100%"
            bg="#f97316"
            _hover={{ bg: "#ea580c" }}
            borderRadius="lg"
            color="white"
            size={{ base: "sm", lg: "40px" }}
            fontSize={{ base: "14px", lg: "17px" }}
            onClick={handleSubmit}
            isDisabled={otp.length !== 6}
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
              "Verify"
            )}
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}
