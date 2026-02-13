import { Flex, Input, Text } from "@chakra-ui/react";

export default function RHFTextField({
  type = "text",
  name,
  register,
  errors,
  validationSchema = {},
  ...rest
}) {
  return (
    <Flex w="full" direction="column">
      <Input
        // autoComplete="off"
        type={type}
        id={name}
        _placeholder={{
          color: "#79716b",
        }}
        size={{ base: "sm", lg: "md" }}
        fontSize={{ base: "13px", lg: "16px" }}
        borderRadius="lg"
        borderColor="#79716b/40"
        _focus={{
          borderColor: "#f97316",
          boxShadow: "0 0 0 1px #f97316",
        }}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <Text fontSize={{ base: "12px", lg: "13px" }} color="red.500" mt="4px">
          {errors[name]?.message}
        </Text>
      )}
    </Flex>
  );
}
