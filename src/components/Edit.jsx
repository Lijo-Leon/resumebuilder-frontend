import React, { useEffect, useState } from 'react'
import { Button, Tooltip } from '@mui/material';
import { FaRegEdit } from "react-icons/fa";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getResumeHistoryAPI, updateResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto',

};

function Edit({ resumeId, resumeData, setResumeData }) {
  console.log(resumeId, resumeData);

  const suggestions = ['React', 'Angular', 'Node', 'Express', 'MongoDB']


  const [resumeHistory, setResumeHistory] = useState({})
  const [userSkills, setUserSkills] = useState("")



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getAResume = async (resumeId) => {
    const response = await getResumeHistoryAPI(resumeId)
    console.log(response);
    setResumeHistory(response?.data)
  }


  const addSkill = (skill) => {
    console.log(skill);
    // console.log(userSkills);

    if (resumeHistory.skills.includes(skill)) {
      alert("Skill is already added...!")
    }

    else {
      //New skills added to the array
      setResumeHistory({ ...resumeHistory, skill: [...resumeHistory.skills, skill] })
    }

  }

  useEffect(() => {
    getAResume(resumeId)
  }, [resumeId])


  const updateResume = async () => {
    try {
      const result = await updateResumeAPI(resumeId, resumeHistory)
      console.log(result);
      setResumeData(result?.data)
      handleClose()
    }

    catch (err) {
      console.log("Error : ", err);
    }
  }

  const removeSkill = (deleteSkill) => {
    setResumeHistory({ ...resumeHistory, skills: resumeHistory.skills.filter((item) => item != deleteSkill) })
  };

  return (
    <div>
      <Tooltip title="Edit">
        <Button onClick={handleOpen}><FaRegEdit fontSize={'24px'} /></Button>
      </Tooltip>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <Stack sx={{ width: '90%', paddingLeft: '30px', height: '470px', }}>
                <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
                  Personal Details
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
                  <TextField id="standard-basic" label="Full Name" variant="standard"
                    value={resumeHistory?.personalDetails?.fullName}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, fullName: e.target.value } })} />

                  <TextField id="standard-basic" label="Job Title" variant="standard"
                    value={resumeHistory?.personalDetails?.jobTitle}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, jobTitle: e.target.value } })} />

                  <TextField id="standard-basic" label="Location" variant="standard"
                    value={resumeHistory?.personalDetails?.location}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, location: e.target.value } })} />
                </Box>
              </Stack>
            </div>

            <div>
              <Stack sx={{ width: '90%', paddingLeft: '30px', height: '470px', }}>
                <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
                  Contact Details
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
                  <TextField id="standard-basic" label="Email Address" variant="standard"
                    value={resumeHistory?.personalDetails?.email}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, email: e.target.value } })} />

                  <TextField id="standard-basic" label="Phone Number" variant="standard"
                    value={resumeHistory?.personalDetails?.phoneNumber}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, phoneNumber: e.target.value } })} />

                  <TextField id="standard-basic" label="Github Profile Link" variant="standard"
                    value={resumeHistory?.personalDetails?.github}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, github: e.target.value } })} />

                  <TextField id="standard-basic" label="LinkedIn Profile Link" variant="standard"
                    value={resumeHistory?.personalDetails?.linkedin}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, linkedin: e.target.value } })} />

                  <TextField id="standard-basic" label="Portfolio Link" variant="standard"
                    value={resumeHistory?.personalDetails?.portfolio}
                    onChange={e => setResumeHistory({ ...resumeHistory, personalDetails: { ...resumeHistory.personalDetails, portfolio: e.target.value } })} />
                </Box>
              </Stack>
            </div>



            <div>
              <Stack sx={{ width: '90%', paddingLeft: '30px', height: '470px' }}>
                <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
                  Education Details
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
                  <TextField id="standard-basic" label="Course Name" variant="standard"
                    value={resumeHistory?.educationDetails?.course}
                    onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, course: e.target.value } })} />

                  <TextField id="standard-basic" label="College Name" variant="standard"
                    value={resumeHistory?.educationDetails?.college}
                    onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, college: e.target.value } })} />

                  <TextField id="standard-basic" label="University" variant="standard"
                    value={resumeHistory?.educationDetails?.university}
                    onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, university: e.target.value } })} />

                  <TextField id="standard-basic" label="Year of Passout" variant="standard"
                    value={resumeHistory?.educationDetails?.passout}
                    onChange={e => setResumeHistory({ ...resumeHistory, educationDetails: { ...resumeHistory.educationDetails, passout: e.target.value } })} />
                </Box>
              </Stack>
            </div>


            <div>
              <Stack sx={{ width: '90%', paddingLeft: '30px', height: '470px' }}>
                <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
                  Professional Details
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
                  <TextField id="standard-basic" label="Job or Internship" variant="standard"
                    value={resumeHistory?.workExperience?.jobTitle}
                    onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, jobTitle: e.target.value } })} />

                  <TextField id="standard-basic" label="Company Name" variant="standard"
                    value={resumeHistory?.workExperience?.company}
                    onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, company: e.target.value } })} />

                  <TextField id="standard-basic" label="Location" variant="standard" value={resumeHistory?.workExperience?.location}
                    onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, location: e.target.value } })} />

                  <TextField id="standard-basic" label="Duration" variant="standard" value={resumeHistory?.workExperience?.duration}
                    onChange={e => setResumeHistory({ ...resumeHistory, workExperience: { ...resumeHistory.workExperience, duration: e.target.value } })} />
                </Box>
              </Stack>
            </div>



            <div>
              <Stack sx={{ width: '90%', paddingLeft: '30px', height: '470px' }}>
                <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
                  Skills
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 20px 30px', gap: '25px' }}>
                  <TextField id="standard-basic" label="Your Skills" variant="standard" value={resumeHistory?.skills} />
                </Box>



                <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
                  Suggestions :
                </Typography>
                <Stack spacing={3} direction="column" width={'100%'} alignItems={'center'} justifyContent={'center'} marginTop={'20px'} marginLeft={'20px'}>
                  <Box width={'100%'} display={'flex'} gap={'20px'}>
                    {
                      suggestions.length > 0 ? (
                        suggestions.map((item, index) => (
                          <Button variant="outlined" onClick={() => addSkill(item)} sx={{ padding: '8px 30px' }} key={index}>{item}</Button>
                        ))
                      ) : (<Typography variant='body2'>
                        No suggestions available
                      </Typography>)
                    }
                  </Box>
                </Stack>

                <Stack mt={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                  <Typography variant='h5' fontWeight={700} color='#064853'>
                    Added Skills :
                    {
                      resumeHistory?.skills?.length > 0 ?
                        resumeHistory?.skills.map((item, index) => (
                          <Button variant="outlined"
                            sx={{ padding: '8px 30px', ml: '20px' }}
                            key={index}>
                            {item}
                            <Button onClick={() => removeSkill(item)}><i class="fa-solid fa-xmark"></i></Button>

                          </Button>
                        ))
                        : ""
                    }
                  </Typography>
                </Stack>

              </Stack>





            </div>



            <div>
              <Stack sx={{ width: '90%', paddingLeft: '30px', height: '470px' }}>
                <Typography variant='h4' sx={{ mt: 2, mb: 1, ml: 3, fontWeight: '700', color: '#064853' }}>
                  Professional Summary
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px 20px 50px 30px', gap: '25px' }}>
                  <TextField id="standard-basic" label="Write a short summary of yourself" variant="standard" value={resumeHistory?.summary}
                    onChange={e => setResumeHistory({ ...resumeHistory, summary: e.target.value })} />
                </Box>
                <Button onClick={() => updateResume()} variant="contained" sx={{ width: '300px', ml: '30px' , textAlign:"center"}}>Update</Button>

              </Stack>


            </div>

          </Box>
        </Fade>
      </Modal>

    </div>
  )
}

export default Edit
