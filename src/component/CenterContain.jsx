import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { Box, Link, Select} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import CustomizedTimeline from './Timeline';
import '../style.css'
import MoreTab from './MoreTab';

export default function TabsPricingExample() {
  return (
    <Tabs
      size="sm"
      aria-label="Pricing plan"
      defaultValue={0}
    >
      <TabList
        sx={(theme) => ({
          '--List-item-radius': '0px',
          borderRadius: 0,
          [`& .${tabClasses.root}`]: {
            fontWeight: 'lg',
            flex: 1,
            bgcolor: 'background.body',
            position: 'relative',
            [`&.${tabClasses.selected}`]: {
              color: 'primary.500',
            },
            [`&.${tabClasses.selected}:before`]: {
              content: '""',
              display: 'block',
              position: 'absolute',
              bottom: -1,
              width: '100%',
              height: 2,
              bgcolor: 'primary.400',
            },
            '&:not(:first-of-type)': {
              borderLeft: `1px solid ${theme.vars.palette.divider}`,
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: '-3px',
            },
          },
        })}
      >
        <Tab sx={{ py: 1.5 }}>Content</Tab>
        <Tab>Timeline</Tab>
        <Tab>
          
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <div className='task-stage'>
          <Box className='task-stage-item'>
            <div className='task-todo'>Todo</div>
          </Box>
          <Box className='task-stage-item'>
            <div className='todo'></div>
          </Box>
          <Box className='task-stage-item'>
            <div className='task-doing'>Doing</div>
          </Box>
          <Box className='task-stage-item'>
            <div className='doing'></div>
          </Box>
          <Box className='task-stage-item'>
            <div className='task-done'>Done</div>
          </Box>
          <Box className='task-stage-item'>
            <div className='done'></div>
          </Box>
        </div>
        <div className='task-content'>
          <Typography>
            <Typography className="task-title">Template Name:</Typography>
            <Typography className="task-detail">Template 1</Typography>
          </Typography>
          <Typography>
            <Typography className="task-title">Subject:</Typography>
            <Typography className="task-detail">Email Subject</Typography>
          </Typography>
          <Typography>
            <Typography className="task-title">From:</Typography>
            <Typography className="task-detail">John&lt;sales@hanbiro.com&gt;</Typography>
          </Typography>
          <Typography>
            <Typography className="task-title">To: </Typography>
            <Typography className="task-detail">Socrates&lt;sales@domain.com&gt;</Typography>
          </Typography>
          <Typography>
            <Typography className="task-title">CC:</Typography>
            <Typography className="task-detail">Kirby Avendula&lt;kirby@domain.com&gt;, Angeline Mercado&lt;angeline@domain.com&gt;</Typography>
          </Typography>
          <Typography>
            <Typography className="task-title">BCC:</Typography>
            <Typography className="task-detail">Isidore Dilao&lt;dilao@domain.com&gt;</Typography>
          </Typography>
          <OutlinedInput placeholder='Email content' className='input-box'/>
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <CustomizedTimeline />
      </TabPanel>
      <TabPanel value={2}>
        test 1
      </TabPanel>
      <TabPanel value={3}>
        test 2
      </TabPanel>
    </Tabs>
  );
}