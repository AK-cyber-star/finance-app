import { createTheme } from "@mui/material/styles";
import { useMemo } from "react"
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Prediction from "@/scenes/predictions";

const App = () => {

  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/predictions" element={<Prediction />}/>
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App