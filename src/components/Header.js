import React from "react";
import mainLogo from "../images/mainLogo.png";
import "../App.css";
import { Typography, Fade } from "@mui/material";

function Header() {
    return (
        <div>
            <Fade in={true} {...(true ? { timeout: 2000 } : {})}>
                <div className="header" id="header">
                    <img src={mainLogo} alt="LOGO" className="mainLogo"></img>
                    <Typography variant="h6" color="white" align="center">
                        Naturalne świeczki produkowane z pasją
                    </Typography>
                </div>
            </Fade>
        </div>
    );
}

export default Header;
