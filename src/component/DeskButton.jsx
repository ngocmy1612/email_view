import React from 'react'
import {Button, styled} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import '../style.css'

function DeskButton() {
    const MyButton = styled(Button)({
        backgroundColor: '#3B76E1',
        paddingLeft: 15,
        paddingRight: 15,
        color: '#ffffff',
        borderRadius: 15,
        fontWeight: 300,
        textTransform: 'unset',
        '&:hover': {
            backgroundColor: '#1E58C0'
        }
    })
    const WriteButton = styled(Button)({
        backgroundColor: '#F56E6E',
        paddingLeft: 15,
        paddingRight: 15,
        color: '#ffffff',
        borderRadius: 15,
        fontWeight: 300,
        textTransform: 'unset',
        '&:hover': {
            backgroundColor: '#F64646'
        }
    })

  return (
    <div className='button-group'>
        <MyButton className='button-info' startIcon={<SaveOutlinedIcon />}>Save</MyButton>
        <MyButton className='button-info' startIcon={<SendOutlinedIcon />}>Send</MyButton>
        <MyButton className='button-info' endIcon={<MoreVertOutlinedIcon />}>More</MyButton>
        <WriteButton className='button-info' startIcon={<AddOutlinedIcon />}>New</WriteButton>
    </div>
  )
}

export default DeskButton