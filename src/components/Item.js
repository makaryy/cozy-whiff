import React, { useState } from "react";
import "../App.css";

import {
    Card,
    CardMedia,
    CardActionArea,
    Typography,
    CardContent,
    Box,
    useMediaQuery
} from "@mui/material";
import Details from "./Details";
import { useTheme } from "@mui/styles";

function Item({ image, desc, desc2, title, imageOnRight, url }) {
    const [openDetails, setOpenDetails] = useState(false);

    const closeDetails = () => {
        setOpenDetails(false);
    };
    const theme = useTheme();
    const overMd = useMediaQuery(theme.breakpoints.up("md"));

    if (!overMd) {
        return (
            <Box>
                <Card className="item" elevation={10}>
                    <CardActionArea
                        sx={{ display: "flex", flexDirection: "column" }}
                        onClick={() => {
                            setOpenDetails(true);
                        }}
                    >
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color="white"
                                align="center"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="white"
                                align="center"
                            >
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
    } else if (imageOnRight) {
        return (
            <Box>
                <Card className="item" elevation={10}>
                    <CardActionArea
                        sx={{ display: "flex", flexDirection: "row" }}
                        onClick={() => {
                            setOpenDetails(true);
                        }}
                    >
                        <CardContent>
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
                        <CardContent>
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
