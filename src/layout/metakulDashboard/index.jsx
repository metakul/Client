import { Outlet } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import Topbar from "../../components/global/Topbar";
import navConfig from "./navConfig";
import Nav from "../../components/nav/Nav";
import { useMediaQuery } from "@mui/material";
import useFetchUserByUsername from "../../hooks/fetchUserByJWT";
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
  const user = useFetchUserByUsername()

  return (
    <>
      <StyledRoot>

        <Topbar
          user={user.data}
          isSidebarOpen={isSidebarOpen}
          isNonMobile={isNonMobile}
          setIsSidebarOpen={setIsSidebarOpen}
          drawerWidth="250px"
        />
        <Nav
          user={user.data}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={() => setIsSidebarOpen(false)}
          navConfig={navConfig}
        />
        <Main style={{
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",  // Fixed background attachment to keep it fixed while scrolling
  backgroundRepeat: "no-repeat",
  paddingLeft:"40px",
  paddingRight:"40px"
}}>
          <Outlet />
        </Main>
      </StyledRoot>
    </>
  );
}
