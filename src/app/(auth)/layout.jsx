"use client";

import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  Separator,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { toaster } from "@/components/ui/toaster";
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdOutlineFacebook } from "react-icons/md";
import { useForm } from "react-hook-form";
import RHFTextField from "@/components/ui/RHFTextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/hooks/useLogin";

const schema = yup
  .object({
    username: yup.string().min(5).max(20).required("username is required!"),
    password: yup
      .string()
      .required("password is required!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
      ),
  })
  .required();

export default function AuthLayout({ children }) {
  const router = useRouter();

  const { mutate, isPending } = useLogin();

  const onLogin = (values) => {
    mutate(values, {
      onSuccess: () => {
        toaster.create({ title: "You Login successfully 🚀", type: "success" });
        router.push("/dashboard");
      },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

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

          <VStack as="form" onSubmit={handleSubmit(onLogin)}>
            <RHFTextField
              name="username"
              placeholder="username"
              register={register}
              errors={errors}
            />
            <RHFTextField
              name="password"
              placeholder="password"
              register={register}
              type="password"
              errors={errors}
            />
            <Button
              type="submit"
              bg="#f97316"
              _hover={{ bg: "#ea580c" }}
              borderRadius="lg"
              color="white"
              size={{ base: "sm", lg: "40px" }}
              fontSize={{ base: "14px", lg: "17px" }}
              disabled={isPending}
              w="full"
            >
              {isPending ? (
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
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
}
