import { createTheme } from "@mui/material/styles";
import { useMemo } from "react"
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Prediction from "@/scenes/predictions";
import Home from "./scenes/Home";
import Header from "./components/Header";
import Contact from "./scenes/Contact";

const App = () => {

  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Routes>
            <Route path="/" element={<><Header on="home" /><Home /></>}/>
            <Route path="/contact" element={<><Header on="contact" /><Contact /></>}/>
            <Route path="/dashboard" element={<><Navbar /><Dashboard /></>}/>
            <Route path="/predictions" element={<><Navbar /><Prediction /></>}/>
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App