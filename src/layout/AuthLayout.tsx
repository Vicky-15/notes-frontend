import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default AuthLayout;
