import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

function ResumeGeneratorPage() {
  return (
    <Box
      sx={{
        bgcolor: "#EFF6FF", 
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 5,
        fontWeight: 600,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight='700'
        sx={{ color: "#033038" }}
      >
        Create your own Resume in minutes.
      </Typography>


      <Box
        sx={{
          display: "flex",
          gap: '150px',
          width: "100%",
          minHeight: 480,
          mb: 1,
        }}
      >

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              width: 430,
              height: 330,
              bgcolor: "#DBEAFE",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <IoDocumentTextSharp className="text-green-700" size={40} style={{ marginBottom: 16, color: "#15803d" }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Add your Information
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Add pre-written examples to each section
            </Typography>
          </Paper>
        </Box>


        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              width: 430,
              height: 330,
              bgcolor: "#DBEAFE",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <FaFileDownload className="text-red-700" size={40} style={{ marginBottom: 16, color: "#b91c1c" }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Download Your Resume
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Download and start applying
            </Typography>
          </Paper>
        </Box>
      </Box>

      <Link to={'/form'}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#064853",
            "&:hover": { bgcolor: "#043139" },
            width: 144,
          }}
        >
          Let's Start
        </Button>
      </Link>

    </Box>
  );
}

export default ResumeGeneratorPage;
