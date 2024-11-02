import { Avatar } from "../components/ui/avatar";
import { Flex, Text } from "@chakra-ui/react";

export default function Testimonial() {
  return (
    <Flex marginTop="2rem" justifyContent="center" gap="25px">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Avatar
          shape="square"
          size="lg"
          name="random girl"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Text as="h3">Random Girl</Text>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Avatar
          shape="square"
          size="lg"
          name="random girl"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Text as="h3">Random Girl</Text>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Avatar
          shape="square"
          size="lg"
          name="random girl"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Text as="h3">Random Girl</Text>
      </Flex>
    </Flex>
  );
}