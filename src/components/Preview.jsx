import React from 'react'
import { Box, Button, Divider, List, Stack, Tooltip, Typography } from '@mui/material';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { addHistoryAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';





function Preview({ resumeData, setResumeData, resumeId, setResumeId }) {

  // Destructure resumeData
  const { personalDetails, educationDetails, workExperience, skills, summary } = resumeData

  // PDF Download
  const handleDownload = async () => {
    // 1. Get the element
    const input = document.getElementById('result')
    console.log(input);

    // 2. Get the element
    const canvas = await html2canvas(input, { scale: 2 })
    console.log(canvas);  //it returns Promise => thats why here we use async await

    // 3. Convert canvas into imageURL
    const imgUrl = canvas.toDataURL('image/png')
    console.log(imgUrl);

    // 4. Generate a PDF
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    //image to pdf
    pdf.addImage(imgUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('resume.pdf')

    const current = new Date()
    console.log(current);

    const formatedDateTime = `${current.toLocaleDateString()}, ${current.toLocaleTimeString}`
    console.log(formatedDateTime);



    try {
      const response = await addHistoryAPI({ ...resumeData, formatedDateTime, imgUrl })
      console.log(response);
      setResumeId(response?.data?.id)
      console.log(resumeId);
    }

    catch (err) {
      console.log(err);


    }
  }

  return (
    <div className='p-5 font'>

      <Box display={'flex'} justifyContent={'right'} fontSize={'24px'} paddingRight={'30px'} my={3} color={'#628ecb'}>
        <Tooltip title="Download">
          <Button onClick={handleDownload}><FaFileDownload fontSize={'24px'} /></Button>
        </Tooltip>

        <Edit resumeData={resumeData} setResumeData={setResumeData} resumeId={resumeId} />


        <Tooltip title="History">
          <Link to={'/History'}>
            <Button><FaHistory fontSize={'24px'} /></Button>
          </Link>
        </Tooltip>
      </Box>


      <Box
        id='result'
        bgcolor={"#ffffff"}
        borderRadius={"10px"}
        border={"1px solid #ddd"}
        width={"100%"}
        maxWidth={"900px"}
        margin={"auto"}
        padding={"30px"}
        boxShadow={5}
        sx={{ fontFamily: "'Poppins', sans-serif" }}

      >
        <Box borderBottom={"3px solid #333"} pb={2} mb={1} >
          <Typography variant="h4" fontWeight={700}>
            {personalDetails.fullName !== "" ? personalDetails.fullName : "FULL NAME"}
          </Typography>
          <Typography variant="h6" fontWeight={500} color="text.secondary">
            {personalDetails.jobTitle !== "" ? personalDetails.jobTitle : "JOB TITLE"}
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            {personalDetails.location !== "" ? personalDetails.location : "Location"}
          </Typography>

          <Stack direction="row" spacing={3} mt={1} flexWrap="wrap">
            <Typography fontSize="14px">
              {personalDetails.email !== "" ? personalDetails.email : "Email Address"}
            </Typography>
            <Typography fontSize="14px">
              {personalDetails.phoneNumber !== "" ? personalDetails.phoneNumber : "Phone Number"}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={4} mt={2} flexWrap="wrap">
            <Link href="#" target="_blank" underline="hover">
              {personalDetails.github !== "" ? personalDetails.github : "Github"}
            </Link>
            <Link href="#" target="_blank" underline="hover">
              {personalDetails.linkedin !== "" ? personalDetails.linkedin : "LinkedIn"}
            </Link>
            <Link href="#" target="_blank" underline="hover">
              {personalDetails.portfolio !== "" ? personalDetails.portfolio : "Portfolio"}
            </Link>
          </Stack>
        </Box>

        <Box mb={3}>
          <Typography
            variant="h6"
            textAlign="left"
            fontWeight={700}
            borderBottom={"2px solid #555"}
            pb={1}
          >
            SUMMARY
          </Typography>
          <Typography fontSize="13px" color="#555" mt={1} textAlign="justify">
            {summary !== "" ? summary : " A highly motivated and detail-oriented person with a strong passion for web development, UI/UX design, and software development. Proficient in frontend and backend development, and responsive design. A quick learner with problem-solving skills, eager to apply technical expertise in a professional environment."}

          </Typography>
        </Box>

        <Box mb={3}>
          <Typography
            variant="h6"
            fontWeight={700}
            borderBottom={"2px solid #555"}
            pb={1}
          >
            SKILLS
          </Typography>


          <List
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              mt: 1,
            }}>

            {skills.length > 0 ? skills.map(item => (
              <Button variant="outlined" sx={{ fontSize: "13px" }}>
                {item}
              </Button>
            )) :
              <Button variant="outlined" sx={{ fontSize: "13px" }}>
                Skill
              </Button>}

          </List>
        </Box>

        <Box mb={3}>
          <Typography
            variant="h6"
            fontWeight={700}
            borderBottom={"2px solid #555"}
            pb={1}
          >
            EDUCATION
          </Typography>
          <Box mt={1}>
            <Typography fontWeight={600}>
              {educationDetails.course !== "" ? educationDetails.course : "Course Name"}
            </Typography>
            <Typography color="text.secondary" fontWeight={500}>
              {educationDetails.university !== "" ? educationDetails.university : "University"}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography color="text.secondary">
                {educationDetails.college !== "" ? educationDetails.college : "College Name"}
              </Typography>
              <Typography color="text.secondary">
                {educationDetails.passout !== "" ? educationDetails.passout : "[Year of Passout]"}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box mb={3}>
          <Typography
            variant="h6"
            fontWeight={700}
            borderBottom={"2px solid #555"}
            pb={1}
          >
            PROFESSIONAL DETAILS
          </Typography>
          <Box mt={1}>
            <Typography fontWeight={600}>
              {workExperience.jobTitle !== "" ? workExperience.jobTitle : "Job / Internship Title"}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Typography color="text.secondary">
                {workExperience.company !== "" ? workExperience.company : "Company Name"}
              </Typography>

              <Typography color="text.secondary">
                {workExperience.duration !== "" ? workExperience.duration : "[Duration]"}
              </Typography>
            </Stack>
            <Typography color="text.secondary">
              {workExperience.location !== "" ? workExperience.location : "Location"}
            </Typography>
          </Box>
        </Box>

        {/* <Box>
          <Typography
            variant="h6"
            fontWeight={700}
            borderBottom={"2px solid #555"}
            pb={1}
          >
            PROFESSIONAL SUMMARY
          </Typography>
          <Typography fontSize="13px" color="#555" mt={1} textAlign="justify">
            Professional summary goes here
          </Typography>
        </Box> */}
      </Box>
    </div>
  )
}

export default Preview
