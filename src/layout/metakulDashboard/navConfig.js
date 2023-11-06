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
      text: "My Wallet",
      icon: <TodayOutlined />,
      to: "wallet",
    },
    {
      text: "NFT Staking",
      icon: <PieChartOutlined />,
      to: "Staking",
    },
    {
      text: "Metakul Collection",
      icon: <TodayOutlined />,
      to: "metakulNFT",
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
      text: "NFT",
      icon: <ShoppingCartOutlined />,
      to: "NFT",
    },

    {
      text: "Marketplace",
      icon: <ReceiptLongOutlined />,
      to: "marketplace",
    },

    {
      text: "Extras",
      icon:null,
      to: "",
    },
    {
      text: "Profile",
      icon: <AdminPanelSettingsOutlined />,
      to: "Profile",
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
    
  ];

  export default navConfig;
