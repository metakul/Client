import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
  } from "@mui/icons-material";

export const navConfig = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
      to: "",
    },
    {
      text: "Metaverse",
      icon: null,
      to: "Metaverse",
    },
    {
      text: "NFT's",
      icon: <ShoppingCartOutlined />,
      to: "NFT",
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
      to: "Transactions",
    },
    {
      text: "Geography",
      icon: <PublicOutlined />,
      to: "Geography",
    },
    {
      text: "Vedic",
      icon: <CalendarMonthOutlined />,
      to: "Vedic",
    },
    {
      text: "Activity",
      icon: <TrendingUpOutlined />,
      to: "Activity",
    },
  ];

  export default navConfig;
