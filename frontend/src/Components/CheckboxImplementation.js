/*
Checkbox
Checkbox component is used in forms when a user needs to select multiple values from several options.
*/

import { Checkbox, Stack } from "@chakra-ui/react";

export default function CheckboxImp() {
  return (
    <>
      <Stack direction="row" spacing="4">
        <Checkbox defaultChecked>Checkbox</Checkbox>
        <Checkbox isDisabled defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox isDisabled>Checkbox</Checkbox>
        {/* Checkbox sizes (sm, md, lg) */}
        <Checkbox size="sm">Checkbox</Checkbox>
        <Checkbox size="md">Checkbox</Checkbox>
        <Checkbox size="lg">Checkbox</Checkbox>
        {/* Change colors with colorScheme prop */}
        <Checkbox colorScheme="orange" size="lg">
          Checkbox
        </Checkbox>
        {/* Invalid Checkbox */}
        <Checkbox isInvalid colorScheme="orange" size="lg">
          Checkbox
        </Checkbox>
        {/* Spacing between checkbox and label can be modified with the spacing prop */}
        <Checkbox spacing="5" colorScheme="orange" size="lg">
          Checkbox
        </Checkbox>
      </Stack>
      <Stack>
        {/* Changing the icon color and size */}
        <Checkbox
          iconColor="blue.800"
          iconSize="0.5rem"
          colorScheme="orange"
          size="lg"
        >
          Checkbox
        </Checkbox>
      </Stack>
    </>
  );
}
