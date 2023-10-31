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
      to: "NFT",
    },
    {
      text: "NFT",
      icon: <ShoppingCartOutlined />,
      to: "NFT",
    },

    {
      text: "KYC",
      icon: <PublicOutlined />,
      to: "kyc",
    },
    {
      text: "Career",
      icon: <CalendarMonthOutlined />,
      to: "Career",
    },
    {
      text: "Marketplace",
      icon: <ReceiptLongOutlined />,
      to: "marketplace",
    },

    {
      text: "Utilities",
      icon: null,
      to: "NFT",
    },
    {
      text: "Laundry",
      icon: <PieChartOutlined />,
      to: "Laundry",
    },
    {
      text: "NFT Staking",
      icon: <TodayOutlined />,
      to: "metakulNFT",
    },
    {
      text: "Profile",
      icon: <AdminPanelSettingsOutlined />,
      to: "Profile",
    },
  ];

  export default navConfig;
