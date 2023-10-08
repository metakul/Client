import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
// hooks
import useResponsive from "../../hooks/useResponsive";
import Scrollbar from "../scrollbar/Scrollbar";
// import NavSection from "./nav-section/NavSection";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";

import UserInfo from "./UserInfo";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";
import profileImage from "../../assets/user.png";
import { tokens } from "../../theme";

export default function Nav({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
  navConfig,
}) {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navRef = useRef(null);

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <>
      <Box
        component="nav"
        sx={{
          flexShrink: { lg: 0 },
        }}
        width={isNonMobile && isSidebarOpen ? `${drawerWidth}-70px`: "0"} // Set width based on isNonMobile
      >
        {isNonMobile ? (
          <Drawer
            open={isSidebarOpen}
            onClose={setIsSidebarOpen}
            variant="persistent"
            ModalProps={{
              keepMounted: false,
            }}
            PaperProps={{
              sx: {
                width: drawerWidth,
                // borderRightStyle: "dashed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "70px",
                marginLeft: 2,
                borderRadius: 4,
                height: "94%",
              },
            }}
          >
            <Scrollbar>
              <Box width="100%">
                <FlexBetween color={colors.secondary.main}>
                  <UserInfo
                    profileImage={profileImage}
                    colors={colors}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isSidebarOpen={isSidebarOpen}
                  />
                </FlexBetween>
                <Divider color={colors.secondary[100]} />
                <List>
                  {navConfig.map(({ text, icon, to }) => {
                    if (!icon) {
                      return (
                        <Typography
                          key={text}
                          sx={{ m: "2.25rem 0 1rem 3rem" }}
                        >
                          {text}
                        </Typography>
                      );
                    }
                    const lcText = to.toLowerCase();

                    return (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            navigate(`/${lcText}`);
                            setActive(lcText);
                          }}
                          sx={{
                            backgroundColor:
                              active === lcText
                                ? colors.secondary[700]
                                : "transparent",
                            color:
                              active === lcText
                                ? colors.secondary[200]
                                : colors.secondary[100],
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              ml: "2rem",
                              color:
                                active === lcText
                                  ? colors.primary[600]
                                  : colors.secondary[200],
                            }}
                          >
                            {icon}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                          {active === lcText && (
                            <ChevronRightOutlined sx={{ ml: "auto" }} />
                          )}
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Scrollbar>
          </Drawer>
        ) : (
          <Drawer
            open={isSidebarOpen}
            onClose={setIsSidebarOpen}
            ModalProps={{
              keepMounted: false,
            }}
            PaperProps={{
              sx: {
                width: drawerWidth,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: "70px",
                marginLeft: 2,
                borderRadius: 4,
                height: "94%",
              },
            }}
          >
            <Scrollbar>
              <Box width="100%">
                <FlexBetween color={colors.secondary.main}>
                  <UserInfo
                    profileImage={profileImage}
                    colors={colors}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isSidebarOpen={isSidebarOpen}
                  />
                </FlexBetween>
                <Divider color={colors.secondary[100]} />
                <List>
                  {navConfig.map(({ text, icon, to }) => {
                    if (!icon) {
                      return (
                        <Typography
                          key={text}
                          sx={{ m: "2.25rem 0 1rem 3rem" }}
                        >
                          {text}
                        </Typography>
                      );
                    }
                    const lcText = to.toLowerCase();

                    return (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            navigate(`/${lcText}`);
                            setActive(lcText);
                          }}
                          sx={{
                            backgroundColor:
                              active === lcText
                                ? colors.secondary[700]
                                : "transparent",
                            color:
                              active === lcText
                                ? colors.secondary[200]
                                : colors.secondary[100],
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              ml: "2rem",
                              color:
                                active === lcText
                                  ? colors.primary[600]
                                  : colors.secondary[200],
                            }}
                          >
                            {icon}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                          {active === lcText && (
                            <ChevronRightOutlined sx={{ ml: "auto" }} />
                          )}
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Scrollbar>
          </Drawer>
        )}
      </Box>
    
    </>
  );
}
