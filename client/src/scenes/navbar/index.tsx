import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbbar = () => {

  const { palette } = useTheme(); 
  const [ selected, setSelected ] = useState("dashboard");

  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >
      {/* left part */}
      <FlexBetween
        gap="0.75rem"
      >
        <PixIcon sx={{ fontSize: "28px" }}/>
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* Right part */}
      <FlexBetween gap="2rem">
        <Box
          sx={{ "&:hover" : { color: palette.primary[100] } }}
        >
          <Link
            to="/"
            onClick={() => setSelected("home")}
            style={{
              color: selected === "home" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Home
          </Link>
        </Box>

        <Box 
          sx={{ "&:hover" : { color: palette.primary[100] } }}
        >
          <Link
            to="/dashboard"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Dashboard
          </Link>
        </Box>

        <Box 
          sx={{ "&:hover" : { color: palette.primary[100] } }}
        >
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>

    </FlexBetween>
  )
}

export default Navbbar