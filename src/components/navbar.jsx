
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo_white.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const menuOptions = [
        {
            text: "Home",
            icon: <InfoIcon />,
            link: "#home",
        },
        {
            text: "About",
            icon: <InfoIcon />,
            link: "#about",
        },
        {
            text: "Features",
            icon: <CommentRoundedIcon />,
            link: "#features",
        },
        {
            text: "Benefits",
            icon: <PhoneRoundedIcon />,
            link: "#benefits",
        },
        {
            text: "Detail",
            icon: <PhoneRoundedIcon />,
            link: "#detail",
        },
        {
            text: "Download",
            icon: <ShoppingCartRoundedIcon />,
            link: "#download",
        },
    ];

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <div className="nav-logo-container">
                {scrolled ?
                    <img
                        src={LogoWhite}
                        alt="BkHelper Logo"
                        height={80}
                        width={80}
                    />
                    :
                    <img
                        src={Logo}
                        alt="BkHelper Logo"
                        height={80}
                        width={80}
                    />
                }

                <a href="#home" className={"nav-logo-text"} style={scrolled ? { color: "white" } : {}}>
                    <p>BkHelper</p>
                </a>
            </div>
            <div className="navbar-links-container" >
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#benefits">Benefits</a>
                <a href="#detail">Detail</a>
                <a href="#home" className="primary-button" style={{ padding: "0.5rem 1.75rem", display: "inline-block", textDecoration: "none" }}>
                    Download
                </a>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component="a" href={item.link}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;