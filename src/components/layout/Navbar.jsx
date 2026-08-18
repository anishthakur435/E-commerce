import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { ProductContext } from "../../services/context/getProducts";
import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import { Show, useAuth } from "@clerk/react";

const NAV_LINKS = [
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { signOut } = useAuth();
  const { cartCount } = useContext(ProductContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "#ffffff",
        color: "#d33a11",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, sm: 3, md: 0 },
            justifyContent: "space-between",
          }}
        >
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
              fontSize: {
                xs: "1.1rem",
                sm: "1.25rem",
                md: "1.5rem",
              },
            }}
          >
            [E-S-T]
          </Typography>

          {/* navbutton */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
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
                  px: 2,

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

          {/* responsive menu */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, md: 1 },
            }}
          >
            <IconButton
              component={Link}
              to="/cart"
              sx={{
                color: "#d33a11",
              }}
            >
              <Badge
                badgeContent={cartCount}
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
            </IconButton>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <Show when="signed-out">
                <Button
                  component={Link}
                  to="/signin"
                  variant="outlined"
                  sx={{
                    color: "#d33a11",
                    borderColor: "#d33a11",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    borderRadius: 0,
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
                  Logout
                </Button>
              </Show>
            </Box>

            <IconButton
              onClick={handleMenuOpen}
              aria-label="Open menu"
              aria-controls={menuOpen ? "mobile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#d33a11",
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              slotProps={{
                paper: {
                  sx: {
                    minWidth: 220,
                    mt: 1,
                    borderRadius: 0,
                  },
                },
              }}
            >
              {NAV_LINKS.map(({ path, label }) => (
                <MenuItem
                  key={path}
                  component={NavLink}
                  to={path}
                  onClick={handleMenuClose}
                  sx={{
                    color: "#d33a11",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    py: 1.5,

                    "&.active": {
                      fontWeight: 800,
                      bgcolor: "rgba(211, 58, 17, 0.08)",
                    },

                    "&:hover": {
                      bgcolor: "rgba(211, 58, 17, 0.05)",
                    },
                  }}
                >
                  {label}
                </MenuItem>
              ))}
              <Divider />
              <Show when="signed-out">
                <MenuItem
                  component={Link}
                  to="/signin"
                  onClick={handleMenuClose}
                  sx={{
                    color: "#d33a11",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  Sign In
                </MenuItem>

                <MenuItem
                  component={Link}
                  to="/signup"
                  onClick={handleMenuClose}
                  sx={{
                    color: "#d33a11",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  Sign Up
                </MenuItem>
              </Show>

              <Show when="signed-in">
                <MenuItem
                  onClick={() => {
                    signOut();
                    handleMenuClose();
                  }}
                  sx={{
                    color: "#d33a11",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  Logout
                </MenuItem>
              </Show>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
