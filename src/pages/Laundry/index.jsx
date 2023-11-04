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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import {
  DeleteOutline as DeleteIcon,
  MoreVert as MoreIcon,
  Person as PersonIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import { FetchMyOrders } from '../../utils/apiUrl/Laundry/Get/getApi';
import { markOrderAsPickedUp } from '../../utils/apiUrl/Laundry/Post/PostApi';

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
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
const [selectedClothesSelection, setSelectedClothesSelection] = React.useState(null);


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

 // Modify the handleMarkAsPickedUp function to accept orderNumber
const handleMarkAsPickedUp = async (orderNumber) => {
  try {
    console.log(orderNumber);
    const response = await markOrderAsPickedUp(orderNumber);
    console.log(response);
    if (response.status === 200) {
      // Order marked as picked up successfully, you can handle success here
      console.log("Order marked as picked up successfully");
    } else {
      // Handle other status codes or error conditions
      console.error("Failed to mark order as picked up");
    }
  } catch (error) {
    // Handle API request error
    console.error("API request error:", error);
  }
};

  const columns = [
  { field: "_id", headerName: "ID", width: 220, editable: false },
  { field: "orderNumber", headerName: "Order Number", width: 180, editable: false },
  { field: "status", headerName: "Status", width: 150, editable: false },
  {
    field: "viewClothes",
    headerName: "View Clothes",
    width: 180,
    editable: false,
    renderCell: (params) => (
      <Button
      variant="contained"
        onClick={() => {
          setSelectedClothesSelection(params.row.clothesSelection);
          setIsDialogOpen(true);
          console.log(params.row.clothesSelection)
        }}
      >
        View Clothes
      </Button>
    ),
  }, 
  {
      field: "actions",
      headerName: "Actions",
      width: 240,
      editable: false,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            onClick={(event) => {
              setOpenMenu(event.currentTarget);
              setSelectedRowId(params.row.orderNumber);
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
            <Typography color={theme.palette.colors.colors.primary[100]}         >
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
                  getRowId={(row) => row.orderNumber}
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
    handleMarkAsPickedUp(selectedRowId);
    setOpenMenu(null);
  }}
>
  <ListItemIcon>
    <PersonIcon sx={{ color: "#000000DE" }} />
  </ListItemIcon>
  Mark as PickedUp
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
              <Box sx={{ color: "#ff4842" }}>Need Help?</Box>
            </MenuItem>
          </Menu>
        </Paper>
      </Box>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
  <DialogTitle>Clothes Selection</DialogTitle>
  <DialogContent>
    {selectedClothesSelection && (
      <pre>{JSON.stringify(selectedClothesSelection, null, 2)}</pre>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
  </DialogActions>
</Dialog>

    </Container>
  );
}
