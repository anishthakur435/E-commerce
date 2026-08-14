import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function AnnouncementBar() {
  return (
    <div>
      <Box className="sticky top-0 z-50 bg-black text-white overflow-hidden text-xs sm:text-sm">
        <div className="flex flex-row overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex flex-row w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 13, repeat: Infinity }}
          >
            {[...Array(8)].map((_, index) => (
              <Typography
                key={index}
                sx={{
                  fontWeight: 900,
                  letterSpacing: "0.1rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: "monospace",
                  padding: 2,

                  flexShrink: 0,
                }}
              >
                Redefining everyday wear. Shop the latest essentials.
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            ))}
          </motion.div>
        </div>
      </Box>
    </div>
  );
}

export default AnnouncementBar;
