import React, { useState } from "react";
import "../App.css";

import {
    Card,
    CardMedia,
    CardActionArea,
    Typography,
    CardContent,
    Box,
    Link
} from "@mui/material";
import { Switch, Route } from "react-router-dom";
import Details from "./Details";

function Item({ image, desc, desc2, title, imageOnRight, url }) {
    const [openDetails, setOpenDetails] = useState(false);

    const closeDetails = () => {
        setOpenDetails(false);
    };

    if (imageOnRight) {
        return (
            <Box>
                <Card className="item" elevation={10}>
                    <CardActionArea
                        sx={{ display: "flex", flexDirection: "row" }}
                        onClick={() => {
                            setOpenDetails(true);
                        }}
                    >
                        <CardContent className="card-content">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color="white"
                            >
                                {title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {desc}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="350"
                            image={image}
                            alt={title}
                        />
                    </CardActionArea>
                </Card>
                <Details
                    title={title}
                    desc={desc}
                    desc2={desc2}
                    image={image}
                    url={url}
                    open={openDetails}
                    close={closeDetails}
                />
            </Box>
        );
    } else {
        return (
            <Box>
                <Card className="item" elevation={10}>
                    <CardActionArea
                        sx={{ display: "flex", flexDirection: "row" }}
                        onClick={() => {
                            setOpenDetails(true);
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="350"
                            image={image}
                            alt={title}
                        />
                        <CardContent className="card-content">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color="white"
                            >
                                {title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Details
                    title={title}
                    desc={desc}
                    desc2={desc2}
                    image={image}
                    url={url}
                    open={openDetails}
                    close={closeDetails}
                />
            </Box>
        );
    }
}

export default Item;
