import React, { useContext } from "react";
import { Image } from "@/components/ui";
import { ThemeContext } from "@/App";

const MillionRayLogo = () => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Image
      source={
        colorMode === "light"
          ? require("../../assets/millionray-logo-light-big.png")
          : require("../../assets/millionray-logo-dark-big.png")
      }
      alt="MillionRay Logo"
      className="h-[42px] w-[170px]"
    />
  );
};

export default MillionRayLogo;
