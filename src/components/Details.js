import { Backdrop, Button, Link, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function Details({ image, desc, desc2, title, url, open, close }) {
    return (
        <Backdrop className="details" open={open}>
            <Paper className="details-paper">
                <Button className="details-button" onClick={close}>
                    <CloseIcon />
                </Button>
                <img src={image} alt={title} className="details-image" />
                <Typography variant="h4" className="details-title">
                    {title}
                </Typography>
                <Typography variant="body1" className="details-desc">
                    {desc}
                </Typography>
                <Typography variant="body2" className="details-desc2">
                    {desc2.map((line) => (
                        <span key={line.index}>
                            {line}
                            <br></br>
                        </span>
                    ))}
                </Typography>
                <Typography variant="body1" className="details-link">
                    <Link href={url} color="primary">
                        Przejdź do sklepu
                    </Link>
                </Typography>
            </Paper>
        </Backdrop>
    );
}

export default Details;
