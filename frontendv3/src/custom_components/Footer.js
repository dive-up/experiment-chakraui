import { Center, Container, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container marginTop="3rem">
      <Center>
        <Flex gap="1rem">
          <Text as="p">Copyright @2024</Text>
          <Text as="p">All Rights Reserved</Text>
        </Flex>
      </Center>
    </Container>
  );
}
