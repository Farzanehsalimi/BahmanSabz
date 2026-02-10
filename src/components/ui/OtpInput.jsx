"use client";

import { HStack, PinInput } from "@chakra-ui/react";

export default function OtpInput({ value = "", onChange, length = 6 }) {
  // Convert string → fixed-length array
  // I had undefined error in inputs for not having arr
  const pinValue = Array.from({ length }, (_, i) => value[i] || "");

  return (
    <HStack justify="center">
      <PinInput.Root
        value={pinValue}
        onValueChange={(e) => onChange(e.value.join(""))}
        size={{ base: "xl", sm: "2xl", lg: "2xl" }}
        fontSize={{ base: "xl", lg: "2xl" }}
      >
        <PinInput.HiddenInput />
        <PinInput.Control gap="0">
          {Array.from({ length }).map((_, index) => (
            <PinInput.Input
              key={index}
              index={index}
              placeholder=""
              bg="#0d0d0d"
              borderColor="gray.600"
              borderRadius="0"
              type="tel"
              inputMode="numeric"
              _focus={{
                borderColor: "#ea580c",
                boxShadow: "0 0 0 1px #ea580c",
                outline: "none",
                zIndex: 1,
              }}
              _first={{
                borderTopLeftRadius: "xl",
                borderBottomLeftRadius: "xl",
              }}
              _last={{
                borderTopRightRadius: "xl",
                borderBottomRightRadius: "xl",
              }}
            />
          ))}
        </PinInput.Control>
      </PinInput.Root>
    </HStack>
  );
}
