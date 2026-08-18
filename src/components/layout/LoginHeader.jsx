import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function LoginHeader() {
  const location = useLocation();
  const isSignIn = location.pathname === "/signin";

  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "#ffffff",
        color: "#d33a11",
        borderBottom: "2px solid #e8e8e8",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, sm: 3, md: 0 },
            justifyContent: "space-between",
          }}
        >
          {/* Back Button */}
          <Button
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "#d33a11",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              "&:hover": {
                bgcolor: "rgba(211, 58, 17, 0.08)",
              },
              borderRadius: 0,
            }}
          >
            <ArrowBack sx={{ fontSize: "1.2rem" }} />
            Back
          </Button>

          {/* Logo/Title */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 900,
              letterSpacing: "0.1rem",
              color: "#d33a11",
              textDecoration: "none",
              fontFamily: "monospace",
              fontSize: "1.3rem",
            }}
          >
            [E-S-T]
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
