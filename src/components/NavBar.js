import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    useMediaQuery,
    Box,
    Menu,
    MenuItem,
    Fade,
    IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as Scroll } from "react-scroll";
import { useTheme } from "@mui/styles";
import "../App.css";

function NavBar() {
    const [active, setActive] = useState("header");
    const theme = useTheme();
    const overMd = useMediaQuery(theme.breakpoints.up("md"));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar elevation={10} className="app-bar">
            <Toolbar className="toolbar">
                {overMd ? (
                    <Box>
                        <Scroll
                            to="header"
                            smooth={true}
                            spy={true}
                            onSetActive={() => setActive("header")}
                        >
                            <Button
                                color="secondary"
                                className={
                                    active === "header"
                                        ? "navButton activeComponent"
                                        : "navButton"
                                }
                            >
                                Początek
                            </Button>
                        </Scroll>
                        <Scroll
                            to="about"
                            smooth={true}
                            spy={true}
                            offset={-75}
                            onSetActive={() => setActive("about")}
                        >
                            <Button
                                color="secondary"
                                className={
                                    active === "about"
                                        ? "navButton activeComponent"
                                        : "navButton"
                                }
                            >
                                O nas
                            </Button>
                        </Scroll>
                        <Scroll
                            to="products"
                            smooth={true}
                            spy={true}
                            offset={-75}
                            onSetActive={() => setActive("products")}
                        >
                            <Button
                                color="secondary"
                                className={
                                    active === "products"
                                        ? "navButton activeComponent"
                                        : "navButton"
                                }
                            >
                                Produkty
                            </Button>
                        </Scroll>
                    </Box>
                ) : (
                    <Box>
                        <IconButton onClick={handleClick}>
                            <MenuIcon
                                sx={{ fontSize: "2.5rem", color: "white" }}
                            />
                        </IconButton>

                        <Menu
                            id="fade-menu"
                            className="menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClick}
                            TransitionComponent={Fade}
                            MenuListProps={{
                                disablePadding: true,
                                sx: {
                                    backgroundColor: "black",
                                    paddingInlineStart: "0px"
                                }
                            }}
                            sx={{
                                width: "100vw"
                            }}
                        >
                            <MenuItem className="menu-item">
                                <Scroll
                                    className="scroll-mobile"
                                    to="header"
                                    smooth={true}
                                    spy={true}
                                    onSetActive={() => setActive("header")}
                                >
                                    <Button
                                        color="secondary"
                                        onClick={handleMenuClick}
                                        className={
                                            active === "header"
                                                ? "navButtonMobile activeComponentMobile"
                                                : "navButtonMobile"
                                        }
                                    >
                                        Początek
                                    </Button>
                                </Scroll>
                            </MenuItem>
                            <MenuItem className="menu-item">
                                <Scroll
                                    className="scroll-mobile"
                                    to="about"
                                    smooth={true}
                                    spy={true}
                                    offset={-75}
                                    onSetActive={() => setActive("about")}
                                >
                                    <Button
                                        color="secondary"
                                        onClick={handleMenuClick}
                                        className={
                                            active === "about"
                                                ? "navButtonMobile activeComponentMobile"
                                                : "navButtonMobile"
                                        }
                                    >
                                        O nas
                                    </Button>
                                </Scroll>
                            </MenuItem>
                            <MenuItem className="menu-item">
                                <Scroll
                                    className="scroll-mobile"
                                    to="products"
                                    smooth={true}
                                    spy={true}
                                    offset={-75}
                                    onSetActive={() => setActive("products")}
                                >
                                    <Button
                                        color="secondary"
                                        onClick={handleMenuClick}
                                        className={
                                            active === "products"
                                                ? "navButtonMobile activeComponentMobile"
                                                : "navButtonMobile"
                                        }
                                    >
                                        Produkty
                                    </Button>
                                </Scroll>
                            </MenuItem>
                        </Menu>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
