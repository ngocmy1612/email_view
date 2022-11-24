import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import '../style.css'
import { styled, Box } from '@mui/system';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
    const ButtonCirrcle = styled(Box)({
        backgroundColor: '#ffffff',
        width: 20,
        height: 20,
        borderRadius: 50,
        borderColor: '#787878'
    })

  return (
    <div className='breadcrumbs'>
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <ArrowBackIcon className='back-icon' />
                <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                >
                Activity
                </Link>
                <Link
                underline="hover"
                color="text.primary"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
                >
                Email Subject
                </Link>
            </Breadcrumbs>
        </div>
        <div className='breadscrumbs-right'>
        <RestoreOutlinedIcon sx={{fontSize: 30, marginRight: 3}}/>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <ButtonCirrcle sx={{marginLeft: 2}}/>
        </div>
    </div>
  );
}