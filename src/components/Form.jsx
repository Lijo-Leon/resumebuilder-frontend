import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Steps from './Steps';
import Preview from './Preview';

function Form() {



  //Create State
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      fullName: "",
      jobTitle: "",
      location: "",
      email: "",
      phoneNumber: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },

    educationDetails: {
      course: "",
      college: "",
      university: "",
      passout: "",
    },

    workExperience: {
      jobTitle: "",
      company: "",
      location: "",
      duration: "",
    },

    skills: [],
    summary: ""

  })

  const [isFinished, setIsFinished] = useState(false)


  //State for storing id of created Resume (FOR EDIT RESUME)
  const [resumeId, setResumeId] = useState("")


  return (
    <div>
      {
        isFinished ?
          <Stack direction="row" width={'100%'}>
            <Box width={'45%'}>
              <Preview resumeData={resumeData} setResumeData={setResumeData} resumeId={resumeId} setResumeId={setResumeId} />
            </Box>
          </Stack>
          :

          <Stack direction="row" width={'100%'}>
            <Box width={'65%'}>
              <Steps resumeData={resumeData} setResumeData={setResumeData} setIsFinished={setIsFinished} />
            </Box>

            <Box width={'45%'}>
              <Preview resumeData={resumeData} setResumeData={setResumeData} />
            </Box>
          </Stack>
      }

    </div>
  )
}

export default Form
