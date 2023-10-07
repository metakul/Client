import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// eslint-disable-next-line 
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// eslint-disable-next-line 
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// eslint-disable-next-line 
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// eslint-disable-next-line 
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// eslint-disable-next-line 
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// eslint-disable-next-line 
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const navConfig = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <HomeOutlinedIcon />,
    },
    {
        title: 'Profile',
        path: '/dashboard/profile/self',
        icon: <PeopleOutlinedIcon />,
    },
    {
        title: 'Metaverse',
        path: '/dashboard/metaverse/list',
        icon: <MapOutlinedIcon />,
    },
    {
        title: 'NFT',
        path: '/dashboard/nft/self',
        icon: <TimelineOutlinedIcon />,
    },
    {
        title: 'Market',
        path: '/dashboard/marketplace/home',
        icon: <BarChartOutlinedIcon />,
    },
    {
        title: 'Create Wallet',
        path: '/dashboard/createWallet/create',
        icon: <PersonOutlinedIcon />,
    }
];

export default navConfig;
