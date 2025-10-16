import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import { addResumeAPI } from '../services/allAPI';
import { MdOutlineCancel } from "react-icons/md";


const steps = ['Basic Information', 'Contact Details', 'Education details', 'Work Experience', 'Skills', 'Review & Submit'];


function Steps({ resumeData, setResumeData, setIsFinished }) {
  console.log(resumeData);

  // console.log(props);
  // props = {
  //   resumeData:{}
  //   setResumeData:[]
  // }
  // props => destructure =>{resumeData,setResumeData}

  // Destructure resumeData
  const { personalDetails, educationDetails, workExperience, skills, summary } = resumeData

  const [userSkills, setUserSkills] = useState("")
  // console.log(userSkills);


  const suggestions = ['React', 'Angular', 'Node', 'Express', 'MongoDB']

  const addSkill = (skill) => {
    console.log(skill);
    // console.log(userSkills);

    if (resumeData.skills.includes(skill)) {
      alert("Skill is already added...!")
    }

    else {
      //New askills added to the array
      setResumeData(data => ({ ...data, skills: [...data.skills, skill] }))
    }

  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());




  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1); // ✅ Correct increment
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const renderStepContent = (step) => {
    switch (step) {
      case 0: return (
        <div>
          <Stack sx={{ width: '60%', paddingLeft: '30px', height: '470px', }}>
            <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
              Personal Details
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, fullName: e.target.value } })} id="standard-basic" label="Full Name" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, jobTitle: e.target.value } })} id="standard-basic" label="Job Title" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, location: e.target.value } })} id="standard-basic" label="Location" variant="standard" />
            </Box>
          </Stack>
        </div>
      )
      case 1: return (
        <div>
          <Stack sx={{ width: '60%', paddingLeft: '30px', height: '470px' }}>
            <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
              Contact Details
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, email: e.target.value } })} id="standard-basic" label="Email Address" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, phoneNumber: e.target.value } })} id="standard-basic" label="Phone Number" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, github: e.target.value } })} id="standard-basic" label="Github Profile Link" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, linkedin: e.target.value } })} id="standard-basic" label="LinkedIn Profile Link" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, portfolio: e.target.value } })} id="standard-basic" label="Portfolio Link" variant="standard" />
            </Box>
          </Stack>
        </div>
      )
      case 2: return (
        <div>
          <Stack sx={{ width: '60%', paddingLeft: '30px', height: '470px' }}>
            <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
              Education Details
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
              <TextField onChange={e => setResumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, course: e.target.value } })} id="standard-basic" label="Course Name" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, college: e.target.value } })} id="standard-basic" label="College Name" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, university: e.target.value } })} id="standard-basic" label="University" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, passout: e.target.value } })} id="standard-basic" label="Year of Passout" variant="standard" />
            </Box>
          </Stack>
        </div>
      )
      case 3: return (
        <div>
          <Stack sx={{ width: '60%', paddingLeft: '30px', height: '470px' }}>
            <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
              Professional Details
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
              <TextField onChange={e => setResumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, jobTitle: e.target.value } })} id="standard-basic" label="Job or Internship" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, company: e.target.value } })} id="standard-basic" label="Company Name" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, location: e.target.value } })} id="standard-basic" label="Location" variant="standard" />
              <TextField onChange={e => setResumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, duration: e.target.value } })} id="standard-basic" label="Duration" variant="standard" />
            </Box>
          </Stack>
        </div>
      )
      case 4: return (
        <div>
          <Stack sx={{ width: '90%', paddingLeft: '30px', height: '470px', marginBottom:'10px' }}>
            <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
              Skills
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 20px 30px', gap: '25px' }}>
              <TextField onChange={e => setUserSkills(e.target.value)} id="standard-basic" label="What are your Skills?" variant="standard" />
            </Box>

            <Button  onClick={() => addSkill(userSkills)} variant="contained" sx={{ width:'300px', ml:'30px'}}>Add</Button>

            <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
              Suggestions :
            </Typography>
            <Stack spacing={3} direction="column" width={'100%'} alignItems={'center'} justifyContent={'center'} marginTop={'20px'} marginLeft={'20px'}>
              <Box width={'100%'} display={'flex'} gap={'20px'}>
                {
                  suggestions.length > 0 ?
                    suggestions.map((item, index) => (
                      <Button variant="outlined" onClick={() => addSkill(item)} sx={{ padding: '8px 30px' }} key={index}>{item}</Button>
                    )) : "Empty Array"
                }
              </Box>
            </Stack>

            <Stack width={'110%'} py={4} mt={'20px'} ml={3} display={'flex'}>
              <Typography variant='h5' fontWeight={700} color='#064853'>
                Added Skills : 
                {
                  skills.length > 0 ?
                    skills.map((item, index) => (
                      <Button onClick={() => addSkill(item)} variant="outlined" sx={{ padding: '5px 10px', ml: '20px', gap:'5px'}} key={index}>
                        {item} 
                      </Button>
                    ))
                    : " No Skills added!"
                }
              </Typography>
            </Stack>

          </Stack>
        </div>
      )
      case 5: return (
        <div>
          <Stack sx={{ width: '60%', paddingLeft: '30px', height: '470px' }}>
            <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
              Professional Summary
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
              <TextField onChange={e => setResumeData({ ...resumeData, summary: e.target.value })} id="standard-basic" label="Write a short summary of yourself" variant="standard" />
            </Box>
          </Stack>
        </div>
      )
    }
  }

  const handleAddResume = async () => {
    try {
      const response = await addResumeAPI(resumeData)
      console.log(response);

    }
    catch (err) {
      console.log("Error", err);

    }
    setIsFinished(true)


    Swal.fire({
      title: "Successfully Added",
      icon: "success",
      draggable: true
    });

  }

  return (
    <div>
      <Box sx={{ width: '100%', pt: '45px' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography variant='h5' sx={{ mt: 2, mb: 1, ml: 7, fontWeight: 600, color: '#064853' }}>Step {activeStep + 1}</Typography>
            <Box>
              {renderStepContent(activeStep)}
            </Box>
            <Box sx={{ display: 'flex', ml: '70px', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}

              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto', mr: '70px' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              {activeStep === steps.length - 1 ?
                <Button onClick={handleAddResume}>Finish</Button>
                :
                <Button onClick={handleNext}>Next</Button>
              }

            </Box>
          </React.Fragment>
        )}
      </Box>

    </div>
  )
}

export default Steps
