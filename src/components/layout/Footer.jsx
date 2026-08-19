import React from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#d9381e] text-white font-mono">
        <Box className="max-w-7xl mx-auto">
          <Grid container spacing={2} className="justify-between p-4 sm:p-6 lg:p-8">
            {/* Left Section */}
            <Grid xs={12} sm={6} md={4} className="flex flex-col">
              <Box className="mb-8 md:mb-0 justify-between flex flex-col">
                <Typography
                  variant="h5"
                  component="h3"
                  className="font-bold tracking-widest uppercase mb-6 text-lg sm:text-xl"
                >
                  [E-S-T]
                  <Typography
                    variant="caption"
                    className="block mt-1 text-xs sm:text-sm italic opacity-75"
                  >
                    clothes
                  </Typography>
                </Typography>

                <Box className="justify-self-auto">
                  <Typography
                    component={Link}
                    to="/contact"
                    variant="subtitle2"
                    className="font-bold mb-2 sm:mb-3 tracking-wider uppercase block hover:underline text-xs sm:text-sm"
                  >
                    CONTACT
                  </Typography>
                  <Typography
                    variant="body2"
                    className="opacity-90 leading-relaxed text-xs sm:text-sm"
                  >
                    Chandigarh
                    <br />
                    Chandigarh, IN, 160001
                  </Typography>
                  <Typography
                    variant="body2"
                    className="mt-2 sm:mt-3 opacity-90 leading-relaxed text-xs sm:text-sm"
                  >
                    123-456-7890
                    <br />
                    <a
                      href="mailto:anishthakur435@gmail.com"
                      className="font-mono text-xs sm:text-sm text-white hover:underline"
                    >
                      est@wear.com
                    </a>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                  className="flex flex-col text-left justify-end py-3 sm:py-5 mt-4"
                >
                  <Typography
                    variant="subtitle2"
                    className="mb-3 font-bold uppercase tracking-widest underline text-xs sm:text-sm"
                  >
                    FOLLOW
                  </Typography>
                  <Box className="flex flex-col gap-1.5 text-xs sm:text-sm">
                    <Typography
                      component="a"
                      href="https://www.linkedin.com/in/anishthakur435"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                      className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                    >
                      LinkedIn
                    </Typography>
                    <Typography
                      component="a"
                      href="https://github.com/anishthakur435"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                      className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                    >
                      Github
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Center Section */}
            <Grid
              xs={12}
              sm={6}
              md={4}
              className="flex justify-center items-center md:py-0"
            >
              <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                {[
                  "Oversized",
                  "Fits And",
                  "Classic",
                  "Vintage Washes",
                  "Built For",
                  "The Concrete",
                  "Jungle",
                  "Survivor",
                ].map((text, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-black text-xs sm:text-sm md:text-base px-1.5 sm:px-2 py-0.5 m-[2px] font-bold uppercase tracking-tight"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </Grid>

            {/* Right Section */}
            <Grid
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              xs={12}
              md={4}
              className="flex flex-col items-start text-left md:text-right justify-end"
            >
              <Box>
                <Typography
                  variant="subtitle2"
                  className="mb-3 font-bold uppercase tracking-widest underline text-xs sm:text-sm"
                >
                  FOLLOW
                </Typography>
                <Box className="flex flex-col gap-1.5 text-xs sm:text-sm">
                  <Typography
                    component="a"
                    href="https://www.linkedin.com/in/anishthakur435"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    LinkedIn
                  </Typography>
                  <Typography
                    component="a"
                    href="https://github.com/anishthakur435"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Github
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Footer Bottom */}
          <Box className="border-t p-3 sm:p-5 text-[10px] sm:text-xs opacity-75 flex flex-col sm:flex-row gap-2 justify-between">
            <Typography variant="caption">© {year} by [E-S-T] wear.</Typography>
            <Typography variant="caption">
              Created by
              <span className="uppercase"> anish</span>
            </Typography>
          </Box>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
