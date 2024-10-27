/*
SimpleGrid provides a friendly interface to create responsive grid layouts with ease.
*/

import { SimpleGrid, Box } from "@chakra-ui/react";

export const FixedColumns = () => {
  return (
    <SimpleGrid columns="2" spacing="10" mb="16">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};

export const ResponsiveWithBreakpoints = () => {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="10" mb="16">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};

export const AutoReponsiveWithMinChildWidth = () => {
  return (
    <SimpleGrid minChildWidth="100px" spacing="10" mb="16">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};

export const ChangingSpacingColumnsRows = () => {
  return (
    <SimpleGrid minChildWidth="100px" spacingX="10px" spacingY="20px" mb="16">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};
