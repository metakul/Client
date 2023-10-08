import { NavLink as RouterLink } from "react-router-dom";
import { Box, List, ListItemText, Button,  useTheme } from "@mui/material";
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { tokens } from "../../../theme";

export default function NavSection({ data = [], ...other }) {
 
  return (
    <Box
      sx={{
        borderTop: 2,
      }}
      {...other}
    >
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "0", textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                m: 2,
                bgcolor: "#90caf9",
                color: "black",
                fontWeight: "fontWeightBold",

                mt: 6,
              }}
            >
              Profile
            </Button>
          </li>
          <li style={{ margin: "0", textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                m: 2,
                bgcolor: "#90caf9",
                color: "black",
                fontWeight: "fontWeightBold",
                mt: 1,
                mb: 6,
              }}
            >
              Settings
            </Button>
          </li>
        </ul>
      </List>
    </Box>
  );
}

function NavItem({ item }) {
  const { title, path, icon, info } = item;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        "&.active": {
          color: colors.primary[100],
          bgcolor:  colors.grey[100],
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />
      {info && info}
    </StyledNavItem>
  );
}
