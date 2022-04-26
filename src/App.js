import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { CssBaseline, Container } from "@mui/material";
import { StyledEngineProvider, createTheme, ThemeProvider } from "@mui/material/styles";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#181f23",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#ffffff",
            contrastText: '#181f23"'
        }
    }
});

function App() {
    return (
        <CssBaseline>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <Router>
                        <div className="main">
                            <Container className="container" maxWidth="lg">
                                <Switch>
                                    <Route exact path="/">
                                        <NavBar />
                                        <Header />
                                        <About />
                                        <Products />
                                        <Footer />
                                    </Route>
                                    <Route path="/kontakt">
                                        <ContactForm />
                                    </Route>
                                </Switch>
                            </Container>
                        </div>
                    </Router>
                </ThemeProvider>
            </StyledEngineProvider>
        </CssBaseline>
    );
}

export default App;
