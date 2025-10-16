import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      {/* 
      <div className='bg-blue-50' style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className='w-full lg:h-140  flex flex-col lg:flex-row py-12'>
          <div className="left w-1/2 h-full flex flex-col justify-center pl-30 space-y-6">
            <h1 className='lg:text-7xl text-[#064853]'
              style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
              Create a <b>Resume</b><br /> that your dream job <br /> will notice.
            </h1>
            <Button className='bg-[#064853] w-36 hover:bg-[#043139]'>Build Resume</Button>
          </div>

          <div className="right w-1/2 h-full flex items-center justify-center py-14">
            <img src={'https://enhancv.com/_next/static/images/resume3-fdd7e3eafb8f16ef8e0aa6f5ef523dca.webp'} alt=""
              className='h-135 rounded mt-28' />
          </div>
        </div>

        <section id='tools' className='mt-28'>
          <h1 className='text-center text-[#064853] text-4xl font-bold'>TOOLS</h1>
          <div className="box w-full h-160 flex">
            <div className="left h-full w-1/2">
              <div className="top h-1/2 w-full">
                <img src={''} alt="" />
              </div>
              <div className="bottom h-1/2 w-full "></div>
            </div>
            <div className="right h-full w-1/2"></div>
          </div>
        </section>
      </div> */}


      <Stack direction="row" sx={{ justifyContent: "center", alignItems: "center", width: '100%', height: '90vh' }}>
        <Box component="div"
          sx={{ width: '50%', height: '100%' }}
          marginLeft={'150px'} marginTop={'250px'}>
          <Typography variant="h2"
            color='#064853'
            component="h2"
            gutterBottom
            sx={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 500, fontSize: '70px' }}>
            Create a <b>Resume</b><br /> that your dream job <br /> will notice.
          </Typography>

        <Link to={'/ResumeGeneratorPage'}>
          <Button variant="" sx={{ background: '#064853', color: 'white', width: '150px' }}>
            Build Resume
          </Button>
        </Link>
        </Box>

        <Box component="div" sx={{
          width: '50%', height: '100%', display: 'flex', justifyContent: 'center'
        }}>
          <img src="https://enhancv.com/_next/static/images/resume3-fdd7e3eafb8f16ef8e0aa6f5ef523dca.webp"
            style={{ scale: 0.8 }} />
        </Box>
      </Stack>

      <Stack component="section" sx={{ width: '100%', height: '100vh' }}>
        <Typography variant='h4'
          color='#064853'
          textAlign='center'
          fontWeight='700'
          marginTop='40px'
          fontFamily={"'Poppins', sans-serif"}>
          TOOLS
        </Typography>

        <Box display={'flex'} width={'100%'} height={'50%'} gap={'150px'}>
          <Box width={'50%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'right'}>
            <Box boxShadow={10} bgcolor={'#064853'} height={'250px'} width={'500px'} textAlign={'center'} px={'30px'} borderRadius={'30px'}>
              <Typography variant='h4'
                color='white'
                textAlign='center'
                fontWeight='700'
                paddingTop='35px'
                fontFamily={"'Poppins', sans-serif"}>
                RESUME
              </Typography>
              <Typography variant='h6'
                mt='30px'
                color='white'
                textAlign='center'
                fontWeight='300'
                fontFamily={"'Poppins', sans-serif"}>
                Create new unlimited resumes and easily edit them afterwards.
              </Typography>
            </Box>
          </Box>
          <Box width={'50%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'left'}>
            <Box boxShadow={10} bgcolor={'#064853'} height={'250px'} width={'500px'} textAlign={'center'} px={'30px'} borderRadius={'30px'}>
              <Typography variant='h4'
                color='white'
                textAlign='center'
                fontWeight='700'
                paddingTop='35px'
                fontFamily={"'Poppins', sans-serif"}>
                COVER LETTERS
              </Typography>
              <Typography variant='h6'
                mt='30px'
                color='white'
                textAlign='center'
                fontWeight='300'
                fontFamily={"'Poppins', sans-serif"}>
                Easily write professional and impressive cover letters.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display={'flex'} width={'100%'} height={'50%'} gap={'150px'}>
          <Box width={'50%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'right'}>
            <Box boxShadow={10} bgcolor={'#064853'} height={'250px'} width={'500px'} textAlign={'center'} px={'30px'} borderRadius={'30px'}>
              <Typography variant='h4'
                color='white'
                textAlign='center'
                fontWeight='700'
                paddingTop='35px'
                fontFamily={"'Poppins', sans-serif"}>
                JOBS
              </Typography>
              <Typography variant='h6'
                mt='30px'
                color='white'
                textAlign='center'
                fontWeight='300'
                fontFamily={"'Poppins', sans-serif"}>
                Automatically receive new and relevent job posting.
              </Typography>
            </Box>
          </Box>
          <Box width={'50%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'left'}>
            <Box boxShadow={10} bgcolor={'#064853'} height={'250px'} width={'500px'} textAlign={'center'} px={'30px'} borderRadius={'30px'}>
              <Typography variant='h4'
                color='white'
                textAlign='center'
                fontWeight='700'
                paddingTop='35px'
                fontFamily={"'Poppins', sans-serif"}>
                APPLICATIONS
              </Typography>
              <Typography variant='h6'
                mt='30px'
                color='white'
                textAlign='center'
                fontWeight='300'
                fontFamily={"'Poppins', sans-serif"}>
                Effortlessely manage and track your job applicationsin an organised manner.
              </Typography>
            </Box>
          </Box>
        </Box>

      </Stack>




      <Stack component="section" sx={{ width: '100%', minHeight: '80vh', bgcolor: '#f4faff', py: 8 }}>
        <Typography variant="h4"
          textAlign="center"
          fontWeight="700"
          color="#064853"
          fontFamily={"'Poppins', sans-serif"}
          mb={6}>
          Testimonial
        </Typography>

        <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
          {[
            {
              name: "Sarah Johnson",
              role: "Software Engineer",
              feedback: "This platform made it so easy to create a professional resume. I landed my dream job within weeks!",
              img: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              name: "David Miller",
              role: "Marketing Specialist",
              feedback: "The cover letter builder saved me so much time. Highly recommended!",
              img: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Emily Davis",
              role: "Product Manager",
              feedback: "Managing job applications has never been this simple. Love the clean design!",
              img: "https://randomuser.me/api/portraits/women/68.jpg"
            }
          ].map((testimonial, index) => (
            <Box key={index}
              boxShadow={6}
              bgcolor="white"
              p={4}
              borderRadius="20px"
              width="300px"
              textAlign="center">
              <Avatar src={testimonial.img} alt={testimonial.name} sx={{ width: 70, height: 70, margin: '0 auto 20px' }} />
              <Typography variant="h6" fontWeight="600" color="#064853">{testimonial.name}</Typography>
              <Typography variant="body2" color="gray" mb={2}>{testimonial.role}</Typography>
              <Typography variant="body1" color="#033038" fontStyle="italic">"{testimonial.feedback}"</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>



    </div>


  )
}

export default LandingPage
