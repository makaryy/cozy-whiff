import React, { useState } from "react";
import { Paper, Alert, Grid, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import "../App.css";
import { config } from "../config";

function ContactForm() {
    const [alert, setAlert] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [emailData, setEmailData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const clearForm = () => {
        setEmailData({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                config.serviceID,
                config.templateID,
                e.target,
                config.userID
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                    setAlert(true);
                }
            );
    };

    return (
        <Paper className="contact" elevation={10}>
            <form onSubmit={sendEmail}>
                <Grid container alignItems="center" spacing={3}>
                    {alert ? (
                        <Grid item xs={12}>
                            <Alert severity="error">
                                Musisz uzupełnić cały formularz
                            </Alert>
                        </Grid>
                    ) : formSent ? (
                        <Grid item xs={12}>
                            <Alert severity="success">
                                Formularz został wysłany
                            </Alert>
                        </Grid>
                    ) : null}
                    <Grid item xs={12}>
                        <TextField
                            className="input"
                            required
                            color="secondary"
                            name="firstName"
                            label="Imię"
                            fullWidth
                            variant="outlined"
                            value={emailData.firstName}
                            onChange={(e) => {
                                setEmailData({
                                    ...emailData,
                                    firstName: e.target.value
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className="input"
                            required
                            color="secondary"
                            name="lastName"
                            label="Nazwisko"
                            fullWidth
                            variant="outlined"
                            value={emailData.lastName}
                            onChange={(e) => {
                                setEmailData({
                                    ...emailData,
                                    lastName: e.target.value
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className="input"
                            required
                            color="secondary"
                            name="email"
                            type="email"
                            label="E-mail"
                            fullWidth
                            variant="outlined"
                            value={emailData.email}
                            onChange={(e) => {
                                setEmailData({
                                    ...emailData,
                                    email: e.target.value
                                });
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            className="input"
                            required
                            color="secondary"
                            multiline
                            name="message"
                            label="Twoja wiadomość"
                            fullWidth
                            rows={7}
                            variant="outlined"
                            value={emailData.message}
                            onChange={(e) => {
                                setEmailData({
                                    ...emailData,
                                    message: e.target.value
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            color="secondary"
                            type="submit"
                        >
                            Wyślij
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            color="secondary"
                            onClick={clearForm}
                        >
                            Wyczyść
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default ContactForm;
