import { chakra } from "@chakra-ui/react";
import SongVideo from "./Components/AspectRatioImplementation";
import AirbnbCard from "./Components/BoxImplementation";
import "./App.css";
import IconNumberFrame from "./Components/CenterImplementation";
import MyPledge from "./Components/ContainerImplementation";
import FlexExample, {
  FlexWithSpacerExample,
} from "./Components/FlexImplementation";
import {
  SpanningColumns,
  StartingEndingLines,
  TemplateAreas,
  TemplateColumns,
} from "./Components/GridImplementation";
import {
  AutoReponsiveWithMinChildWidth,
  ChangingSpacingColumnsRows,
  FixedColumns,
  ResponsiveWithBreakpoints,
} from "./Components/SimpleGridImplementation";
import {
  ContentHStack,
  ContentStack,
  ContentVStack,
} from "./Components/StackImplementation";
import { SimpleWrap, WrapWithSpacing } from "./Components/WrapImplementation";
import { ButtonImp } from "./Components/ButtonImplementation";
import CheckboxImp from "./Components/CheckboxImplementation";
import EditableImp from "./Components/EditableImplementation";

function App() {
  return (
    <>
      {/* Below I am using the chakra factory object to pass style props to html h1 element. */}
      <chakra.h1 mb={2}>Implementing Chakra UI</chakra.h1>
      {/* <EditableImp /> */}
      {/* <CheckboxImp /> */}
      {/* <ButtonImp /> */}
      {/* <SimpleWrap /> */}
      {/* <WrapWithSpacing /> */}
      {/* <ContentStack /> */}
      {/* <ContentHStack /> */}
      {/* <ContentVStack /> */}
      {/* <FixedColumns /> */}
      {/* <ResponsiveWithBreakpoints /> */}
      {/* <AutoReponsiveWithMinChildWidth /> */}
      {/* <ChangingSpacingColumnsRows /> */}
      {/* <TemplateColumns /> */}
      {/* <SpanningColumns /> */}
      {/* <StartingEndingLines /> */}
      {/* <TemplateAreas /> */}
      {/* <FlexExample /> */}
      {/* <FlexWithSpacerExample /> */}
      {/* <MyPledge /> */}
      {/* <IconNumberFrame /> */}
      {/* <AirbnbCard /> */}
      {/* <SongVideo /> */}
    </>
  );
}

export default App;
