/*
Grid is a layout for managing grid layouts.
*/

import { Grid, GridItem } from "@chakra-ui/react";

export const TemplateColumns = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="6" mx="8">
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
};

export const SpanningColumns = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5,1fr)"
      gap="4"
      mt="4"
      mx="8"
    >
      <GridItem rowSpan="2" colSpan="1" bg="tomato" />
      <GridItem colSpan="2" bg="papayawhip" />
      <GridItem colSpan="2" bg="papayawhip" />
      <GridItem colSpan="4" bg="tomato" />
    </Grid>
  );
};

export const StartingEndingLines = () => {
  return (
    <Grid templateColumns="repeat(5,1fr)" gap="4" mt="4" mx="8">
      <GridItem colSpan="2" h="10" bg="tomato" />
      <GridItem colStart="4" colEnd="6" h="10" bg="papayawhip" />
    </Grid>
  );
};

export const TemplateAreas = () => {
  return (
    <Grid
      templateAreas={`"header header"
            "nav main"
            "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      mt="4"
      mx="8"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Header
      </GridItem>
    </Grid>
  );
};
