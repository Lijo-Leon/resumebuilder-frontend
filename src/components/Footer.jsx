import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#064853", color: "white", py: 6, px: { xs: 2, md: 10 } }}>
      <Stack 
        direction={{ xs: "column", md: "row" }} 
        justifyContent="space-between" 
        alignItems={{ xs: "center", md: "flex-start" }} 
        spacing={4}
      >
        <Box>
          <Typography variant="h5" fontWeight="700" mb={2}>
            ResuMate
          </Typography>
          <Typography variant="body2" color="gray">
            Build your professional resume and cover letter easily.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="700" mb={2}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2" component="a" href="#" sx={{ color: "white", textDecoration: "none", "&:hover": { textDecoration: "underline" }}}>Home</Typography>
            <Typography variant="body2" component="a" href="#tools" sx={{ color: "white", textDecoration: "none", "&:hover": { textDecoration: "underline" }}}>Tools</Typography>
            <Typography variant="body2" component="a" href="#resume" sx={{ color: "white", textDecoration: "none", "&:hover": { textDecoration: "underline" }}}>Resume Builder</Typography>
            <Typography variant="body2" component="a" href="#contact" sx={{ color: "white", textDecoration: "none", "&:hover": { textDecoration: "underline" }}}>Contact</Typography>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="700" mb={2}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton sx={{ color: "white" }}><FaFacebookF /></IconButton>
            <IconButton sx={{ color: "white" }}><FaTwitter /></IconButton>
            <IconButton sx={{ color: "white" }}><FaLinkedinIn /></IconButton>
            <IconButton sx={{ color: "white" }}><FaInstagram /></IconButton>
          </Stack>
        </Box>
      </Stack>

      <Box mt={6} textAlign="center">
        <Typography variant="body2" color="gray">
          © 2025 ResuMate. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
