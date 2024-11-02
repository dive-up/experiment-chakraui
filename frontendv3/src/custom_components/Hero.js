import { Container, Flex, Image, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container marginTop={{ base: "1rem" }}>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="25px"
        fontSize="2xl"
      >
        <Image
          height="90vh"
          alt="Picture of a sail boat facing the camera"
          src="https://images.unsplash.com/photo-1526335727645-74a18e4ffb2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <Flex
          maxWidth="40%"
          flexDirection="column"
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <Text as="h2" textAlign="center">
            Sometimes you sail without knowing if you will reach your
            destination.
          </Text>
          <Text as="p" textAlign="center">
            But to sail is to acknowledge you need to explore to grow.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
