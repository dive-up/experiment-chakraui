import { Link, Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex
        width="100%"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 4rem"
        as="header"
      >
        <Link href="/home" _hover={{ textDecor: "none" }}>
          <Text as="h1">LOGO</Text>
        </Link>
        <Flex flexDirection="row" gap="25px">
          <Link href="/home">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      </Flex>
    </>
  );
}
