import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import NotesGrid from "./components/NotesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX="10px">
          <SideBar />
        </GridItem>
      </Show>

      <GridItem area="main">
        <NotesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
