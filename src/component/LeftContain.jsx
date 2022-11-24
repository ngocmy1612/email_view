import React from 'react'
import { Box } from '@mui/material'
import {Button, styled} from '@mui/material'

function LeftContain() {
    const StatusButton = styled(Button)({
        backgroundColor: '#17A2B8',
        marginLeft: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#ffffff',
        borderRadius: 15,
        fontWeight: 300,
        textTransform: 'unset',
        '&:hover':{
            backgroundColor: '#17A2B8'
        }
    })
  return (
    <Box sx={{paddingLeft: 2}}>
        <h2>Summary</h2>
        <h4>Send Schedule</h4>
        <p>Schedule</p>
        <h4>Send Date</h4>
        <p>2022-02-01 11:00</p>
        <h4>Priority</h4>
        <StatusButton>Normal</StatusButton>
        <h4>Purpose</h4>
        <h4>Description</h4>
        <h4>Regarding</h4>
    </Box>
  )
}

export default LeftContain