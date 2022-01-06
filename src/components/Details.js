import {
    Backdrop,
    Button,
    Link,
    Paper,
    Typography,
    useMediaQuery
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useTheme } from "@mui/styles";

function Details({ image, desc, desc2, title, url, open, close }) {
    const theme = useTheme();
    const overLg = useMediaQuery(theme.breakpoints.up("lg"));
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    if (overLg) {
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
                            <span key={line}>
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
    } else {
        return (
            <Backdrop className="details" open={open}>
                <Button className="details-button" onClick={close}>
                    <CloseIcon />
                </Button>
                <Paper className="details-paper-mobile">
                    {overSm && (
                        <img
                            src={image}
                            alt={title}
                            className="details-image-sm"
                        />
                    )}
                    <Typography
                        variant="h6"
                        className="details-title-mobile"
                        align="center"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        className="details-desc-mobile"
                        align="center"
                    >
                        {desc}
                    </Typography>
                    <br />
                    <Typography
                        variant="body2"
                        className="details-desc2-mobile"
                        align="center"
                    >
                        {desc2.map((line) => (
                            <span key={line}>
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
}

export default Details;
