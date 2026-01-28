"use client";

import { Box, Typography, keyframes } from "@mui/material";

// Define the animation
const loaderMove = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(80px); }
`;

export default function LinkedInLoader() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "#f3f2ef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        {/* LinkedIn Logo */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            color: "#0a66c2",
            mb: 2,
          }}
        >
          Linked
          <Box
            component="span"
            sx={{
              backgroundColor: "#0a66c2",
              color: "#fff",
              px: 0.8,
              borderRadius: 0.5,
              ml: 0.3,
            }}
          >
            in
          </Box>
        </Typography>

        {/* Loader Bar */}
        <Box
          sx={{
            width: 120,
            height: 3,
            bgcolor: "#ddd",
            borderRadius: 1.5,
            overflow: "hidden",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "100%",
              bgcolor: "#0a66c2",
              animation: `${loaderMove} 1.2s infinite ease-in-out`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
