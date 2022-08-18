import { Box } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";

interface Props {
  children?: JSX.Element | JSX.Element[];
  variant?: WrapperVariant;
}

const Wrapper = ({ children, variant = "regular" }: Props) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
