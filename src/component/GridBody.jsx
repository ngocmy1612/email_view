import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LeftContain from './LeftContain';
import CenterContain from './CenterContain';
import RightContain from './RightContain';
import LabTabs from './MoreTab';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  borderRadius: 20,
  height: '100vh',
  boxShadow: '1px 2px 5px #B5B7BA',
  color: theme.palette.text.primary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <LeftContain />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {/* <CenterContain /> */}
            <LabTabs />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <RightContain />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}