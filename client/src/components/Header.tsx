import FlexBetween from "@/components/FlexBetween";
import { Box, Button, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import { Link } from "react-router-dom";

const Header = ({ on }: {on: string}) => {

  const { palette } = useTheme(); 

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
        {on == "home" ? (
            <Box 
            sx={{ "&:hover" : { color: palette.primary[100] } }}
          >
            <Link
              to="/contact"
              style={{
                  textDecoration: "none",
                  color: "white"
              }}
            >
              <Button sx={{backgroundColor: "black", color: "white", fontWeight: "bold", borderRadius: "24px", transition: "all 0.3s ease-in-out", padding: "12px 24px", "&:hover": {backgroundColor: "lime", color: "black"}}}>
                  Contact Me
              </Button>
            </Link>
          </Box>
        ) : (
            <Box
          sx={{ "&:hover" : { color: palette.primary[100] } }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "inherit"
            }}
          >
            Home
          </Link>
        </Box>
        )} 
      </FlexBetween>

    </FlexBetween>
  )
}

export default Header