/*
Editable
EditableText is used for inline renaming of some text. It appears as normal UI text but transforms into a text input field when the user clicks or focuses on it.
*/

import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";

function EditableImp() {
  return (
    <>
      <Editable defaultValue="Salute Baby">
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable defaultValue="Salute Baby">
        <EditablePreview />
        <EditableTextarea />
      </Editable>
    </>
  );
}

/* 
we can use custom input and controls with the help of the as prop
 */

export default EditableImp;
