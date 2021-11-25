import React from "react";
import "../App.css";

import {
    Card,
    CardMedia,
    CardActionArea,
    Typography,
    CardContent,
    Link
} from "@mui/material";

function Item({ image, desc, title, imageOnRight, url }) {
    if (imageOnRight) {
        return (
            <Link onClick={() => window.open(url)}>
                <Card className="item" elevation={10}>
                    <CardActionArea
                        sx={{ display: "flex", flexDirection: "row" }}
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
                            height="275"
                            image={image}
                            alt={title}
                        />
                    </CardActionArea>
                </Card>
            </Link>
        );
    } else {
        return (
            <Link onClick={() => window.open(url)}>
                <Card className="item" elevation={10}>
                    <CardActionArea
                        sx={{ display: "flex", flexDirection: "row" }}
                    >
                        <CardMedia
                            component="img"
                            height="275"
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
            </Link>
        );
    }
}

export default Item;
