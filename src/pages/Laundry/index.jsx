import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Container,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Breadcrumbs,
  Link,
  Stack,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DeleteOutline as DeleteIcon,
  MoreVert as MoreIcon,
  Person as PersonIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import { FetchMyOrders } from '../../utils/apiUrl/Laundry/Get/getApi';

// Import your loading GIF
import loadingGif from '../../assets/gif/loading_24.gif';

export default function BasicEditingGrid() {
    const theme=useTheme()
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [openMenu, setOpenMenu] = React.useState(null);
  const [selectedRowId, setSelectedRowId] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    FetchMyOrders()
      .then((data) => {
        console.log(data.data);
        setRows(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 120, editable: false },
  { field: "orderNumber", headerName: "Order Number", width: 260, editable: false },
  { field: "status", headerName: "Status", width: 180, editable: false },
  { field: "items", headerName: "Items", width: 180, editable: false },
  { field: "services", headerName: "Services", width: 180, editable: false },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            onClick={(event) => {
              setOpenMenu(event.currentTarget);
              setSelectedRowId(params.row._id);
            }}
          >
            <MoreIcon />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Container maxWidth="xl">
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          mb: 5,
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Orders List
          </Typography>
        </Stack>
        <Stack
          sx={{
            mt: { xs: 5, sm: 0 },
          }}
        >
          <Button
            to={"/createOrder"}
            component={RouterLink}
            sx={{
                background:theme.palette.colors.colors.secondary[900],
              py: 1.25,
              px: 3,
              borderRadius: 2,
              fontWeight: 700,
            }}
          >
            <AddIcon
              sx={{
                mr: 1,
              }}
            />
            <Typography               color={theme.palette.colors.colors.primary[100]}         >
            Add Order

            </Typography>
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Paper
          sx={{
            minHeight:"100px",
            width: "100%",
            mb: 2,
            overflow: "hidden",
            borderRadius: 4,
            boxShadow:
              "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
          }}
        >
            {loading ? (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 999,
                  background: "rgba(0, 0, 0, 0.5)", // Add background blur
                }}
              >
                <img style={{
                    margin:"12px"
                }} src={loadingGif} alt="Loading" />
              </div>
            ) : (
              <>
                <TextField
                  label="Search"
                  variant="outlined"
                  size="small"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  style={{ marginBottom: 16 }}
                />
                <DataGrid
                sx={{
                    background:theme.palette.colors.colors.primary[800]
                }}
                  rows={rows}
                  columns={columns}
                  getRowId={(row) => row._id}
                  initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                  }}
                />
              </>
            )}
          <Menu
            open={Boolean(openMenu)}
            anchorEl={openMenu}
            onClose={() => setOpenMenu(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                ml: -2,
                width: 180,
                borderRadius: 2,
                "& .MuiMenuItem-root": {
                  typography: "body2",
                  borderRadius: 1,
                  p: 1,
                  mx: 1,
                },
              },
            }}
          >
            <MenuItem
              onClick={() => {
                setOpenMenu(null);
              }}
            >
              <ListItemIcon>
                <PersonIcon sx={{ color: "#000000DE" }} />
              </ListItemIcon>
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOpenMenu(null);
                // Handle delete action
              }}
            >
              <ListItemIcon>
                <DeleteIcon sx={{ color: "#ff4842" }} />
              </ListItemIcon>
              <Box sx={{ color: "#ff4842" }}>Delete</Box>
            </MenuItem>
          </Menu>
        </Paper>
      </Box>
    </Container>
  );
}
