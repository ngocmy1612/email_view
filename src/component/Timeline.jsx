import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import '../style.css'

export default function CustomizedTimeline() {
  return (
    <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
        }}>
            <Box sx={{
                textAlign: 'center',
                width: '100px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '25px',
                backgroundColor: '#343a40',
                color: 'white'
            }}>
                2021-03-17
            </Box>
        </Box>
      
      <TimelineItem>
        <TimelineSeparator>
        <TimelineConnector />
          <TimelineDot color="primary">
            <RateReviewIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Box className='timeline-box'>
            <Box className='timeline-detail'>
              <Typography className='timeline-title'>Expected Duration was updated from 1 hour to 1 day by MSR</Typography>
              <Typography className='timeline-time'>15:28</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <ChatBubbleOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Box className='timeline-box'>
            <Box className='timeline-detail'> 
              <Typography className='timeline-title'>KDH noted " The demo location is changed. "</Typography>
              <Typography className='timeline-time'>10:00</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <AttachFileIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Box className='timeline-box'>
            <Box className='timeline-detail'> 
              <Typography className='timeline-title'>MSR uploaded a file report.doc</Typography>
              <Typography className='timeline-time'>09:42</Typography>
            </Box>
            <Box className='timeline-attach'>
              <Button startIcon={<SaveAltIcon />}>Download</Button>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}