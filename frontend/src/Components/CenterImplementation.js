/*
Center is a layout component that centers its child within itself.
*/

import { PhoneIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";

const IconNumberFrame = () => {
  return (
    <Center w="40px" h="40px" bg="tomato" color="white">
      <PhoneIcon />
    </Center>
  );
};

export default IconNumberFrame;
