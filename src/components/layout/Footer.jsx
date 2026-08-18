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
      <footer className="bg-[#d9381e] text-white   font-mono">
        <Box className="max-w-7xl mx-auto">
          <Grid container spacing={1} className="justify-between p-8">
            {/*
             */}
            <Grid xs={12} md={4} className="flex flex-col ">
              <Box className="mb-12 md:mb-0 justify-between flex flex-col">
                <Typography
                  variant="h4"
                  className="font-bold tracking-widest uppercase mb-14"
                >
                  [E-S-T]
                  <Typography
                    variant="caption"
                    className="block mt-1 text-sm italic opacity-75"
                  >
                    clothes
                  </Typography>
                </Typography>

                <Box className="justify-self-auto">
                  <Typography
                    component={Link}
                    to="/contact"
                    variant="subtitle2"
                    className="font-bold mb-3 tracking-wider uppercase block hover:underline"
                  >
                    CONTACT
                  </Typography>
                  <Typography
                    variant="body2"
                    className="opacity-90 leading-relaxed"
                  >
                    Chandigarh
                    <br />
                    Chandigarh, IN, 160001
                  </Typography>
                  <Typography
                    variant="body2"
                    className="mt-3 opacity-90 leading-relaxed"
                  >
                    123-456-7890
                    <br />
                    <a
                      href="mailto:anishthakur435@gmail.com"
                      className="font-mono text-base text-white hover:underline"
                    >
                      est@wear.com
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/*  */}
            <Grid
              xs={12}
              md={4}
              className="flex justify-center items-center lg:py-8 md:py-0"
            >
              <div className=" flex flex-col items-center gap-1 ">
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
                    className="bg-white text-black text-xl px-2 py-0.5 m-[2px] font-bold uppercase tracking-tight"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </Grid>

            {/*  */}
            <Grid
              xs={12}
              md={4}
              className="flex flex-col items-start  text-left md:text-right justify-end mt-4 md:mt-0"
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  className="mb-4 font-bold uppercase tracking-widest underline"
                >
                  FOLLOW
                </Typography>
                <Box className="flex flex-col gap-2">
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

          {/*  */}
          <Box className="border-t p-5 text-xs opacity-75 flex flex-row   gap-2 justify-between">
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
