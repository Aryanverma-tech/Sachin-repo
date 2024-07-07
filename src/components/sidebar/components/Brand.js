import React from "react";
import './brand.css';


// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
     <h1 className="visual"><b>Visual Dashboard </b></h1>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
