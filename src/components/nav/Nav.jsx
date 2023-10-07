import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Link, Drawer } from "@mui/material";
import userImage from "../../assets/user.png";
import { tokens } from "../../theme";

// hooks
import useResponsive from "../../hooks/useResponsive";
import Scrollbar from "../scrollbar/Scrollbar";
import NavSection from "./nav-section/NavSection";

const NAV_WIDTH = 280;

const StyledImg = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "1.5em",
  },
}));

const HomeLink = styled(Link)(() => ({
  fontSize: 21,
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
}));

export default function Nav({ navConfig, openNav, onCloseNav, onOpenNav }) {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              borderRightStyle: "dashed",
              backgroundColor: colors.blueAccent[700], // Use theme-based background color
              marginTop: 2,
              marginLeft: 2,
              borderRadius: 4,
              height: "94%",
            },
          }}
        >
          <Scrollbar>
            <Box
              sx={{
                py: 3,
                display: "inline-flex",
                justifyContent: "flex-end",
                paddingRight: 2,
              }}
            >
            </Box>
            <Box sx={{ py: 3, display: "inline-flex" }}>
              <HomeLink to="/">
                <StyledImg
                  src={userImage}
                  alt="Home"
                  sx={{
                    width: 90,
                    p: 1,
                    position: "sticky",
                    left: "1em",
                  }}
                />by METAKUL
              </HomeLink> 
            </Box>
            <NavSection data={navConfig} />
          </Scrollbar>
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              backgroundColor: theme.palette.background.default, // Use theme-based background color
            },
          }}
        >
          <Scrollbar>
            <Box
              sx={{
                py: 3,
                display: "inline-flex",
                justifyContent: "flex-end",
                paddingRight: 2,
              }}
            >
            </Box>
            <Box sx={{ py: 3, display: "inline-flex" }}>
              <HomeLink to="/">
                <StyledImg
                  src={userImage}
                  alt="Home"
                  sx={{
                    width: 70,
                    p: 1,
                    position: "sticky",
                    left: "1em",
                  }}
                />by METAKUL
              </HomeLink>
            </Box>
            <NavSection data={navConfig} />
          </Scrollbar>
        </Drawer>
      )}
    </Box>
  );
}
