import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import About from "./components/About";
import { CssBaseline, Container } from "@mui/material";
import {
    StyledEngineProvider,
    createTheme,
    ThemeProvider
} from "@mui/material/styles";

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
                    <div className="main">
                        <Container className="container" maxWidth="lg">
                            <TopBar />
                            <Header />
                            <About />
                            <Products />
                            <Contact />
                        </Container>
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        </CssBaseline>
    );
}

export default App;
