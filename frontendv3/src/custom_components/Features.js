import { Container, Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

export default function Features() {
  return (
    <Container marginTop={{ base: "2rem" }}>
      <Flex justifyContent="space-between">
        <chakra.ul>
          <chakra.li>Feature 1</chakra.li>
          <chakra.li>Feature 2</chakra.li>
          <chakra.li>Feature 3</chakra.li>
        </chakra.ul>
        <chakra.ul>
          <chakra.li>Feature 1</chakra.li>
          <chakra.li>Feature 2</chakra.li>
          <chakra.li>Feature 3</chakra.li>
        </chakra.ul>
        <chakra.ul>
          <chakra.li>Feature 1</chakra.li>
          <chakra.li>Feature 2</chakra.li>
          <chakra.li>Feature 3</chakra.li>
        </chakra.ul>
      </Flex>
    </Container>
  );
}
