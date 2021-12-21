import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    useScrollTrigger,
    Slide,
    Button
} from "@mui/material";
import { Link as Scroll } from "react-scroll";
import "../App.css";

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function TopBar() {
    // const [value, setValue] = useState("header");
    // const [scrollTo, setScrollTo] = useState("header");
    const [active, setActive] = useState("header");

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    //     // setScrollTo(newValue);
    // };
    // const handleScroll = (event, newValue) => {
    //     setActive(newValue);
    //     // setTimeout(() => {
    //     //     setScrollTo("");
    //     // }, 1000);
    // };
    return (
        //<HideOnScroll>
        <AppBar elevation={10} className="app-bar">
            <Toolbar className="toolbar">
                {/* <Typography variant="h6" component="div"> */}
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
                {/* <Scroll
                    to="footer"
                    smooth={true}
                    spy={true}
                    offset={-75}
                    onSetActive={() => setActive("footer")}
                >
                    <Button
                        color="secondary"
                        className={
                            active === "footer"
                                ? "navButton activeComponent"
                                : "navButton"
                        }
                    >
                        Kontakt
                    </Button>
                </Scroll> */}
                {/* </Typography> */}
            </Toolbar>
        </AppBar>
        //</HideOnScroll>
    );
}

export default TopBar;
