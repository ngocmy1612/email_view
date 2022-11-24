import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import PersonIcon from '@mui/icons-material/Person';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 3px', display: 'flex', alignItems: 'center'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: '12px'}}
        placeholder="Type or click to add an user"
        inputProps={{ 'aria-label': 'type or click to add an user' }}
      />
      <Divider sx={{ height: 25, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '8px' }} aria-label="directions">
        <PersonIcon />
      </IconButton>
    </Paper>
  );
}