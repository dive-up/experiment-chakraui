/*
Wrap is a layout component used to add space between elements and wraps automatically if there isn't enought space.

Wrap: Wrap composes the Box component and renders a <ul> tag.
WrapItem: WrapItem composes the Box components and renders the HTML <li> tag.
*/

import { Wrap, WrapItem, Center } from "@chakra-ui/react";

export function SimpleWrap() {
  return (
    <Wrap>
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  );
}

export function WrapWithSpacing() {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  );
}

/*
Wrap will accept align and justify props to align child elements.
*/
