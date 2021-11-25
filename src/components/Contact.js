import { Link, Paper } from "@mui/material";
import { Instagram, Facebook, ShoppingCart, Email } from "@mui/icons-material";
import React from "react";
import "../App.css";

function Contact() {
    return (
        <Paper className="contact" id="contact" elevation={10}>
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

            <Link
                className="link"
                href="https://www.etsy.com/pl/shop/CozyWhiff?ref=profile_header"
            >
                <ShoppingCart className="icon" />
            </Link>

            <Email className="icon" />
        </Paper>
    );
}

export default Contact;
