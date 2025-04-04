import React from "react";
import { HStack, Link, LinkText, Text } from "../components/ui";

const Banner = () => {
  return (
    <HStack
      className="justify-center items-center min-h-16 bg-shade-0"
      space="sm"
    >
      <Text className="text-content-0" size="sm">
        Before you start, check out our
      </Text>
      <Link href="https://ui.gluestack.io">
        <LinkText className="text-content-50 font-semibold" size="sm">
          Terms of Service
        </LinkText>
      </Link>
    </HStack>
  );
};
export default Banner;
