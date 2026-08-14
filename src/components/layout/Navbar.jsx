import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Badge,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { ProductContext } from "../../services/context/getProducts";
import { ShoppingCart } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Show, useAuth } from "@clerk/react";

const NAV_LINKS = [
  // { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar({}) {
  const { signOut } = useAuth();
  const { cartCount } = useContext(ProductContext);
  return (
    <AppBar
      position="relative"
      sx={{ bgcolor: "#ffffff", color: "#d33a11", borderBottom: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
         
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              fontWeight: 900,
              letterSpacing: "0.1rem",
              color: "#d33a11",
              textDecoration: "none",
              fontFamily: "monospace",
            }}
          >
            [E-S-T]
          </Typography>
         

          <Box sx={{ display: { xs: "flex", md: "flex" }, gap: 2 }}>
            {NAV_LINKS.map(({ path, label }) => (
              <Button
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  color: "#d33a11",
                  textTransform: "uppercase",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  "&.active": {
                    color: "#d33a11",
                    fontWeight: 800,
                    borderBottom: "2px solid #d33a11",
                    borderRadius: 0,
                  },
                  "&:hover": {
                    bgcolor: "transparent",
                    opacity: 0.8,
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Button
              component={Link}
              to="/cart"
              variant="outlined"
              sx={{
                border: "none",
                color: "#d33a11",
                borderColor: "#d33a11",
                textTransform: "uppercase",
                fontWeight: 700,
                borderRadius: 0,
                px: 2.5,
                "&:hover": {
                  borderColor: "#d33a11",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Badge
                badgeContent={cartCount}
                color="default"
                sx={{
                  "& .MuiBadge-badge": {
                    bgcolor: "#d33a11",
                    color: "#ffffff",
                    fontWeight: 700,
                  },
                }}
              >
                <ShoppingCart />
              </Badge>
            </Button>
            <div>
              <Show when="signed-out">
                <Button
                  component={Link}
                  variant="outlined"
                  to="/signin"
                  sx={{
                    color: "#d33a11",
                    borderColor: "#d33a11",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    borderRadius: 0,
                    px: 1.5,
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  sx={{
                    bgcolor: "#d33a11",
                    borderRadius: 0,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    "&:hover": {
                      bgcolor: "#b82f16",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Show>

              <Show when="signed-in">
                <Button
                  onClick={() => signOut()}
                  variant="contained"
                  sx={{
                    bgcolor: "#d33a11",
                    borderRadius: 0,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    "&:hover": {
                      bgcolor: "#b82f16",
                    },
                  }}
                >
                  LogOut
                </Button>
              </Show>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
