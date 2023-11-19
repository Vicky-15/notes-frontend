import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import CreateNoteButton from "../components/CreateNoteButton";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainLayout = () => {
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
        <Stack paddingX={"10px"} spacing={6}>
          <CreateNoteButton />
          <Outlet />
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
