import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import CloseFullscreenOutlinedIcon from "@mui/icons-material/CloseFullscreenOutlined";
// Define a styled component for the user information section
const UserInfoBox = styled(Box)(({ theme, colors }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: colors.secondary[900],
  borderColor: colors.secondary[800],
  borderRadius: "16px",
  padding: "1rem",
  width: "100%",
  margin: "10px 10px",
}));

const AvatarImage = styled("img")({
  height: "35px",
  width: "35px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "20px",
});

const UserInfoText = styled("div")({
  textAlign: "left",
});

const Username = styled(Typography)({
  variant: "h4",
  fontWeight: "bold",
});

const UserDescription = styled(Typography)(({ colors }) => ({
  fontWeight: "bold",
  fontSize: "0.9rem",
  color: colors.secondary[100],
}));

const UserSubtitle = styled(Typography)(({ colors }) => ({
  fontSize: "0.8rem",
  color: colors.secondary[200],
}));
const CloseIconButton = styled(IconButton)(({ theme, colors }) => ({
  zIndex: 9999, // Adjust the z-index value as needed
  marginLeft: "26px",
  color: colors.secondary[200],
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

// Updated component using the styled components
export default function UserInfo({
  colors,
  profileImage,
  setIsSidebarOpen,
  isSidebarOpen,
}) {
  return (
    <UserInfoBox colors={colors}>
      <AvatarImage alt="profile" src={profileImage} />
      <UserInfoText>
        <Username>METAKUL</Username>
        <UserDescription colors={colors}>Gasless</UserDescription>
        <UserSubtitle colors={colors}>Metaverse</UserSubtitle>
      </UserInfoText>
      <CloseIconButton
        colors={colors}
        onClick={() => {
          console.log("Close button clicked"); // Add this line
          setIsSidebarOpen(!isSidebarOpen);
        }}
      >
        <CloseFullscreenOutlinedIcon sx={{ color: colors.secondary[100] }} />
      </CloseIconButton>
    </UserInfoBox>
  );
}
