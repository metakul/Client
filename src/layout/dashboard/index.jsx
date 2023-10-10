import { Outlet } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import Topbar from "../global/Topbar";
import navConfig from "./navConfig";
import Nav from "../../components/nav/Nav";
import {  useMediaQuery } from "@mui/material";
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  [theme.breakpoints.up("lg")]: {
  },
}));

export default function DashboardLayout() {
  
  const isNonMobile = useMediaQuery("(min-width: 766px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
          <StyledRoot>

      <Topbar
          user={{}}
          isSidebarOpen={isSidebarOpen}
          isNonMobile={isNonMobile}
          setIsSidebarOpen={setIsSidebarOpen}
          drawerWidth="250px"
      />
        <Nav
          user={ {}}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={() => setIsSidebarOpen(false)}
          navConfig={navConfig}
        />
        <Main>
          <Outlet  />
        </Main>
      </StyledRoot>
    </>
  );
}
