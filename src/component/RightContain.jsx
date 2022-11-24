import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Link } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import CloseIcon from '@mui/icons-material/Close';
import CustomizedInputBase from './CustomizedInputBase';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DescriptionIcon from '@mui/icons-material/Description';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import '../style.css'

export default function RightContain() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DragIndicatorIcon sx={{color: 'gray', marginRight:'5px'}}/>
          <Typography>Customer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='user-detail'>
            <Box className='account'>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className='avatar'/>
                <Typography sx={{paddingLeft: 1, fontSize: '14px'}}>Allan Rey Palban</Typography>
            </Box>
            <Box className='account-icon'>
                <MailOutlineIcon sx={{margin: '0 3px', color: 'green'}}/>
                <SendToMobileIcon sx={{margin: '0 3px', color: 'orange'}}/>
                <CloseIcon sx={{margin: '0 3px', color: 'red'}}/>
            </Box>
          </div>
          <div className='user-detail'>
            <Box className='account'>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className='avatar' />
                <Typography sx={{paddingLeft: 1, fontSize: '14px'}}>Situmay</Typography>
            </Box>
            <Box className='account-icon'>
                <MailOutlineIcon sx={{margin: '0 3px', color: 'green'}}/>
                <SendToMobileIcon sx={{margin: '0 3px', color: 'orange'}}/>
                <CloseIcon sx={{margin: '0 3px', color: 'red'}}/>
            </Box>
          </div>
          <div>
            <CustomizedInputBase />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <DragIndicatorIcon sx={{color: 'gray', marginRight:'5px'}}/>
          <Typography>Assigned Rep.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='user-select'>
            <div className='user-detail act'>
              <Box className='account'>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className='avatar' />
                  <Typography sx={{paddingLeft: 1, fontSize: '14px'}}>Allan Rey Palban</Typography>
              </Box>
              <Box className='account-icon'>
                  <CloseIcon sx={{margin: '0 3px', color: 'red'}}/>
              </Box>
            </div>
          </div>
          <div className='user-detail'>
            <Box className='account'>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className='avatar' />
                <Typography sx={{paddingLeft: 1, fontSize: '14px'}}>Situmay</Typography>
            </Box>
            <Box className='account-icon'>
                <MailOutlineIcon sx={{margin: '0 3px', color: 'green'}}/>
                <SendToMobileIcon sx={{margin: '0 3px', color: 'orange'}}/>
                <CloseIcon sx={{margin: '0 3px', color: 'red'}}/>
            </Box>
          </div>
          <div>
            <CustomizedInputBase />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <DragIndicatorIcon sx={{color: 'gray', marginRight:'5px'}}/>
          <Typography>Attachments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='download-box'>
            <div className='download-detail'>
              <Box className='attach-file'>
                  <DescriptionIcon className='attach-icon'/>
                  <Typography sx={{paddingLeft: 1}}>
                    <Typography sx={{fontSize: '14px'}}>계약서계약서계약서계약서계약서계</Typography>
                    <Typography sx={{fontSize: '12px', color: 'grey'}}>(18.94 KB) 2019/11/02 12:00:12</Typography>
                  </Typography>
              </Box>
              <Box className='account-icon'>
                  <SaveAltIcon sx={{margin: '0 3px', color: 'lightblue'}} />
                  <CloseIcon sx={{margin: '0 3px', color: 'red'}}/>
              </Box>
            </div>
            <div className='download-detail'>
              <Box className='attach-file'>
                  <DescriptionIcon className='attach-icon'/>
                  <Typography sx={{paddingLeft: 1}}>
                    <Typography sx={{fontSize: '14px'}}>sample_list.txt</Typography>
                    <Typography sx={{fontSize: '12px', color: 'grey'}}>(18.94 KB) 2019/11/02 12:00:12</Typography>
                  </Typography>
              </Box>
              <Box className='account-icon'>
                  <SaveAltIcon sx={{margin: '0 3px', color: 'lightblue'}} />
                  <CloseIcon sx={{margin: '0 3px', color: 'red'}}/>
              </Box>
            </div>
            <div className='drag-box'>
              <CloudUploadOutlinedIcon sx={{color: '#D9D9D9', marginRight:'10px'}}/>
              <Typography>Drag & Drop Files</Typography>
            </div>
            <Box className='attachment'>
              <Button startIcon={<SystemUpdateAltIcon />}>Download</Button>
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <DragIndicatorIcon sx={{color: 'gray', marginRight:'5px'}}/>
          <Typography>Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box className='account-icon' sx={{marginBottom: '10px'}}>
                <Link sx={{textDecoration: 'none'}}>Woman Peacoat</Link>
                <CloseIcon sx={{margin: '0 3px', color: 'red'}}/>
            </Box>
          <div>
            <CustomizedInputBase />
          </div>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}