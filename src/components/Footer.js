import { Box, Link, Paper, Typography, Divider } from "@mui/material";
import { Instagram, Facebook, ShoppingCart, Email } from "@mui/icons-material";
import React from "react";
import "../App.css";

function Footer() {
    return (
        <Paper className="footer" id="footer" elevation={10}>
            <Divider
                orientation="vertical"
                light={true}
                flexItem={true}
                className="divider"
            />
            <Box className="footer-column">
                <Typography variant="body1">
                    Odwiedź nasze social media:
                </Typography>
                <Box className="footer-links">
                    <Link
                        href="https://www.instagram.com/cozy_whiff/?hl=en"
                        className="link"
                    >
                        <Instagram className="icon" />
                    </Link>
                    <Link
                        className="link"
                        href="https://www.facebook.com/CozyWhiffCandles/"
                    >
                        <Facebook className="icon" />
                    </Link>
                </Box>
            </Box>
            <Divider
                orientation="vertical"
                light={true}
                flexItem={true}
                className="divider"
            />
            <Box className="footer-column">
                <Typography variant="body1">
                    Zapraszamy na zakupy na{" "}
                    <Link
                        className="link"
                        href="https://www.etsy.com/pl/shop/CozyWhiff?ref=profile_header"
                    >
                        etsy.com
                    </Link>
                </Typography>
                <Box className="footer-links">
                    <Link
                        className="link"
                        href="https://www.etsy.com/pl/shop/CozyWhiff?ref=profile_header"
                    >
                        <ShoppingCart className="icon" />
                    </Link>
                </Box>
            </Box>
            <Divider
                orientation="vertical"
                light={true}
                flexItem={true}
                className="divider"
            />
            <Box className="footer-column">
                <Typography variant="body1">Skontaktuj się z nami:</Typography>
                <Email className="icon" />
            </Box>
            <Divider
                orientation="vertical"
                light={true}
                flexItem={true}
                className="divider"
            />
        </Paper>
    );
}

export default Footer;
