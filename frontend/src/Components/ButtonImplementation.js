/*
Button
Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
*/

import { MoonIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";

export function ButtonImp() {
  return (
    /* 
    Added size prop. (xs, sm, md, lg)
    Added variant prop.(solid, outline, ghost, link)
    Added right and left icon props.(leftIcon, rightIcon)
    */
    <>
      <Button
        size="lg"
        colorScheme="red"
        variant="solid"
        leftIcon={<MoonIcon />}
        rightIcon={<TriangleDownIcon />}
      >
        Button 1
      </Button>

      {/* 
          Added loading interaction.
          */}
      <Button
        isLoading
        loadingText="Wait to complete"
        size="lg"
        colorScheme="red"
        variant="solid"
        leftIcon={<MoonIcon />}
        rightIcon={<TriangleDownIcon />}
      >
        Button 2
      </Button>

      {/* 
          Added isAttached prop.
          Grouped with Button Group. */}
      <ButtonGroup variant="solid" isAttached>
        <Button>Call</Button>
        <Button>Text</Button>
      </ButtonGroup>
    </>
  );
}
