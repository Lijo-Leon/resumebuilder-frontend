import React, { useEffect, useState } from 'react'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';
import { Box, Stack, Typography, Button } from '@mui/material';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'

function History() {

  const [resume, setResume] = useState([])

  const getHistory = async () => {
    try {
      const response = await getHistoryAPI()
      console.log(response);
      setResume(response.data)
    }

    catch (err) {
      console.log("Error", err);
    }
  }
  useEffect(() => {
    getHistory()
  }, [])

  const deleteHistory = async (id) => {
    const response = await deleteHistoryAPI(id)
    console.log(response);
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    getHistory()
  }

  useEffect(() => {
    getHistory()

  }, [])






  return (
    <div>
      <Typography variant='h3' marginTop={'30px'} textAlign={'center'}>
        DOWNLOADED HISTORY
      </Typography>

      <div className="row flex p-10 gap-20">

        {
          resume.length > 0 ?
            resume.map((item) => (
              <div className="col">
                <Stack>
                  Review at : {item.formatedDateTime}
                  <span>
                    <Button onClick={() => deleteHistory(item.id)}>
                      <MdDelete />
                    </Button>
                  </span>
                </Stack>

                <Box>
                  <img src={item.imgUrl} alt="" width={'330px'} />
                </Box>
              </div>
            ))


            : 
            <Box width={'100%'} height={'178px'} bgcolor={''} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Typography variant='h3'>
                "History is Not available..."
              </Typography>
            </Box> 
        }
      </div>
    </div>
  )
}

export default History
