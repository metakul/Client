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
import { tokens } from "../../theme";
import useIsLoggedIn from '../../hooks/isUserLogin';



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
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen();
    }
  }, [pathname]);

  // Render the registration button
  const renderRegistrationButton = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        margin:4
      }}
    >
      <button
        onClick={() => navigate("/login")}
        style={{
          background: colors.primary[500],
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          borderRadius:"20px"
        }}
      >
        Register
      </button>
    </Box>
  );
  return (
    <>
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
      }}
      marginRight={isNonMobile && isSidebarOpen ? `${drawerWidth}` : `0`}
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
           backgroundColor:colors.primary[900],
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           marginTop: "75px",
           marginLeft: 2,
           borderRadius: 4,
           height: "85%",
           paddingBottom:"40px"
         },
       }}
     >
       <Scrollbar>
         <Box width="100%">
           <FlexBetween color={colors.secondary.main}>
             <UserInfo
               profileImage="assets/user.png"
               colors={colors}
               setIsSidebarOpen={setIsSidebarOpen}
               isSidebarOpen={isSidebarOpen}
             />
           </FlexBetween>
           <Divider color={colors.secondary[100]} />
       {isLoggedIn ? (

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
                           ? colors.secondary[900]
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
              ):(
                renderRegistrationButton()
               )}
           <Divider color={colors.secondary[100]} />

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
              marginTop: "75px",
              marginLeft: 2,
              borderRadius: 4,
              height: "85%",
              paddingBottom:"40px"

            },
          }}
        >
          <Scrollbar>
               <Box width="100%">
                 <FlexBetween color={colors.secondary.main}>
                   <UserInfo
                     profileImage="assets/user.png"
                     colors={colors}
                     setIsSidebarOpen={setIsSidebarOpen}
                     isSidebarOpen={isSidebarOpen}
                   />
                 </FlexBetween>
                 <Divider color={colors.secondary[100]} />
            {isLoggedIn ? (

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
                                 ? colors.secondary[900]
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
                   ) : (
                    // User does not have a valid JWT token, display the registration button
                    renderRegistrationButton()
                  )}
           <Divider color={colors.secondary[100]} />

               </Box>
          
          </Scrollbar>
        </Drawer>
      )}
    </Box>
  </>
);
}
