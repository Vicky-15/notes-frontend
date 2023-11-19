import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Grid templateColumns="1fr)" gap={4} h="100vh" placeContent={"center"}>
      <GridItem colSpan={2}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default AuthLayout;
