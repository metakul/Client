import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import the js-cookie library
import jwt_decode from "jwt-decode";
import copy from "clipboard-copy"; // Import the clipboard-copy library to copy text to the clipboard
import toast from "react-hot-toast";
import { ColorModeContext, tokens } from "../../theme";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "../FlexBetween";
import {
  AppBar,
  Button,
  Box,
  Paper,
  Avatar,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import useIsLoggedIn from "../../hooks/isUserLogin";

import { userLogout } from "../../utils/apiUrl/apiUrl";

import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';

const StyledMenu = styled((props, colors) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme, colors }) => ({
  "& .MuiPaper-root": {
    backgroundColor: colors.primary[800],
    borderRadius: "8px", // Adjusted border-radius for consistency with your original code
    marginTop: theme.spacing(1),
    padding: "16px", // Adjusted padding for consistency with your original code
    minWidth: 240,
  },
}));

const StyledMenuItem = styled("div")(({ theme, colors }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(72, 92, 165, 0.5)",
    borderRadius: "8px",
  },
  "& .MuiAvatar-root": {
    width: "24px",
    height: "26px",
    marginRight: theme.spacing(1),
    color: colors.primary[100],
  },
  "& .MuiTypography-root": {
    color: colors.primary[300],
  },
}));

const Menus = styled(MenuItem)`
  padding-left: 0px !important;
  padding-top: 20px !important;
`;


const Topbar = ({
  user,
  isSidebarOpen,
  isNonMobile,
  setIsSidebarOpen,
  drawerWidth,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [smartWalletAddress, setSmartWalletAddress] = useState(null);
  const [isIconClicked, setIsIconClicked] = useState(false); // Define isIconClicked state here
  const isLoggedIn = useIsLoggedIn();


  const iconClickedStyle = {
    transform: isIconClicked ? 'scale(0.8)' : 'scale(1)',
    transition: 'transform 0.3s',
    ml: 2
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(user)


  useEffect(() => {
    if(user){
    setSmartWalletAddress(user.smartWalletAddress);
    }
  }, []);

  const handleCopySmartWalletAddress = () => {
    if (user.smartWalletAddress) {
      setIsIconClicked(true);
      copy(user.smartWalletAddress)
        .then(() => {
          toast.success("Copied");
        })
        .catch((error) => {
          console.error("Error copying address:", error);
          toast.error("Copy failed");
        });
      // Reset the animation after a brief delay
      setTimeout(() => {
        setIsIconClicked(false);
      }, 200); // Adjust the delay as needed to match your transition duration
    }
  };

  const handleOpenWallet = () => {
    // Use the `navigate` function to go to the new "Winnings" page
    navigate("/wallet"); // Replace "/winnings" with the actual route to your "Winnings" page
  };
  const handleOpenProfile = () => {
    // Use the `navigate` function to go to the new "Winnings" page
    navigate("/profile"); // Replace "/winnings" with the actual route to your "Winnings" page
  };

  const handleLogout = async () => {
    try {
      // Call the userLogout function from your API to log the user out on the server side
      await userLogout();
      navigate("/");
      window.location.reload();
    } catch (error) {
      // Handle any errors that may occur during the logout process
    }
  };

  const openWallet = async () => {
    navigate("/wallet")
  }

  return (
    <AppBar
      sx={{
        position: "fixed", // Make the AppBar fixed at the top
        background: "rgba(255, 255, 255, 0.1)", // Apply background color with opacity when scrolled
        backdropFilter: "blur(10px)", // Apply blur effect when scrolled
        boxShadow: "2", // Add shadow when scrolled
        transition: "background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s", // Add transitions for a smooth effect
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton
            sx={{
              transition: "margin 0.3s ease-in-out", // Add the transition property
            }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MenuIcon />
          </IconButton>

          <FlexBetween
            backgroundColor={colors.primary[900]}
            borderRadius="9px"
            gap="1rem"
            p="0.1rem 1.5rem"
            minWidth={"100px"}
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween sx={{ gap: isNonMobile ? "2rem" : "0.2rem" }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          {isLoggedIn ? (
            <>
            <IconButton onClick={openWallet}>
              <AccountBalanceWalletOutlinedIcon sx={{ fontSize: "25px" }} />
            </IconButton>
            <FlexBetween>
            <div className="flex justify-between items-center mt-11 sm:mt-11 md:mt-0 lg:mt-0 mx-2 ">
              <Button
                className=" "
                id="demo-customized-button"
                aria-controls={open}
                aria-haspopup="true"
                aria-expanded={"true"}
                // variant="contained"
                disableElevation
                onClick={handleClick}
                sx={{
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <div className="bg-yankees-blue rounded-3xl items-center  cursor-pointer w-max mr-2 sm:mr-0  ">
                  <div className="h-10 text-xs flex justify-items-end justify-end px-1 py-1 items-center">
                    {/* <div className=" flex pl-5 pr-6" style={{color:colors.primary[100]}}>
                      B134 ... c945
                    </div> */}
                    <div>
                      <Avatar>
                        <img src="assets/user.png" />
                      </Avatar>
                    </div>
                  </div>
                </div>
              </Button>

              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                colors={colors}
              >
                <div className="text-gray font-black text-sm tracking-wide pb-9">
                  Hi {user.email} !
                </div>
                {/* {smartWalletAddress && ( */}
                <Typography
                  sx={{
                    position: "relative",
                    left: "10%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="body2"
                  color="textSecondary"
                >
                  {user.smartWalletAddress.slice(0, 3) + "..." + user.smartWalletAddress.slice(-4)}
                  <ContentCopyOutlinedIcon
                    onClick={handleCopySmartWalletAddress}
                    sx={iconClickedStyle}
                  />
                </Typography>

                {/* )} */}

                {/* <Menus onClick={handleClose} disableRipple
                  sx={{
                      '&:hover': {
                          background: "#1C2438",
                      },
                  }}>
                  <EditIcon />
                  Edit
              </Menus> */}
                <Paper>
                  <StyledMenuItem colors={colors}>
                    <Avatar>
                      <Person4OutlinedIcon />
                    </Avatar>
                    <Typography onClick={handleOpenProfile}>Profile</Typography>
                  </StyledMenuItem>
                </Paper>
                <Paper>

                  <StyledMenuItem colors={colors}>
                    <Avatar>
                      <RedeemTwoToneIcon />
                    </Avatar>
                    <Typography onClick={handleOpenWallet}>My Wallet</Typography>
                  </StyledMenuItem>

                </Paper>
                <Paper>
                  <StyledMenuItem colors={colors}>
                    <Avatar>
                      <Groups2TwoToneIcon />
                    </Avatar>
                    <Typography>Referral</Typography>
                  </StyledMenuItem>
                </Paper>

                <Paper>
                  <StyledMenuItem colors={colors} onClick={handleLogout}>
                    <Avatar>
                      <LogoutOutlinedIcon />
                    </Avatar>
                    <Typography>Log Out</Typography>
                  </StyledMenuItem>
                </Paper>
              </StyledMenu>
            </div>
          </FlexBetween>
            </>            
          ) : null}

        
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
