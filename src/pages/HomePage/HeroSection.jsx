import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  Paper,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import hero1 from "../../assets/images/hero1.svg";
import hero2 from "../../assets/images/hero2.svg";
import hero3 from "../../assets/images/hero3.svg";
import hero4 from "../../assets/images/hero4.svg";
import hero5 from "../../assets/images/hero5.svg";
import hero6 from "../../assets/images/hero6.svg";
import percentage from "../../assets/images/percentage.svg";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { ConnectWallet } from "@thirdweb-dev/react";
import useIsLoggedIn from '../../hooks/isUserLogin';

const HeroSection = () => {
  const isLoggedIn = useIsLoggedIn();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  console.log(isLoggedIn)
 
  return (
    <Box
      component="div"
      sx={{
        bgcolor: colors.primary[800],
        borderRadius: "8px",
        padding: 2,
        minWidth: 240,
        py: 6,
        px: 6,
        minHeight: "224px",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{
          display: "block"
        }}>
          <img src={percentage} alt="Percentage" />
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Gas Fee
            <Box
              sx={{
                // background: "linear-gradient(to right, cyan, blue)",
                height: "2px",
              }}
            ></Box>
          </Typography>
        </Box>
        <Box sx={{
          marginLeft: 6,
          mt: 2,

        }}>

          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            VIA: METAKUL
            <Box
              sx={{
                // background:
                //   "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))",
                height: "3px",
              }}
            ></Box>
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2 }}>
            FOR: EDUCATIONAL METAVERSE
          </Typography>
        </Box>
      </Box>




      <Box
        sx={{
          position: "relative",
          mt: 4,
          display: {
            xs: "block",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          },
          marginTop: "40px",
        }}
      >
        {isNonMobile ? (
          <Box display="flex" flexDirection="row">
            <img
              src={hero1}
              alt="Hero1"
              sx={{ position: "relative", right: "2px" }}
            />
            <img
              src={hero3}
              alt="Hero3"
              sx={{ position: "relative", right: "8px" }}
            />
            <img
              src={hero2}
              alt="Hero2"
              sx={{ position: "absolute", left: "10px" }}
            />
          </Box>
        ) : (
          <div>
            <img
              src={hero4}
              alt="Hero4"
              sx={{ position: "relative", right: "2px" }}
            />
            <img
              src={hero5}
              alt="Hero5"
              sx={{ position: "relative", left: "0", top: "1px" }}
            />
            <img
              src={hero6}
              alt="Hero6"
              sx={{ position: "relative", right: "0", top: "2px" }}
            />
          </div>
        )}
        <Box
          sx={{
            textAlign: {
              xs: "left",
              sm: "center",
              md: "center",
              lg: "right",
              "2xl": "right",
            },
            mt: { xs: 10, sm: 0, md: 10, lg: 0, "2xl": 0 },
            display: "flex",
            flexDirection: "column",
            bgcolor: colors.primary[800],
            borderRadius: "50px"

          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", letterSpacing: "wide" }}>
            Utilize Power Of Blockchain In METAVERSE
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              letterSpacing: "wider",
              lineHeight: "1.5",
              pt: 2,
            }}
          >
            WITH EASE OF METAKUL GASLESS PLATFORM
          </Typography>
          <div sx={{ flex: "1" }}></div>
          <div>
        
        <ConnectWallet/>
          </div>

        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
