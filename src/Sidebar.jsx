import * as React from 'react';
import './style.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ActiveLastBreadcrumb from './component/Breadcrumbs';
import DeskButton from './component/DeskButton';
import BasicGrid from './component/GridBody';
import Badge from '@mui/material/Badge';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    backgroundColor: 'green',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open} sx={{backgroundColor: '#F1F3F7'}}> */}
      <AppBar position="fixed" open={open} sx={{backgroundColor: '#F1F3F7'}}>
        <Toolbar className='toolbar'>
        <div className='header-left'>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon className='menu-icon'/>
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{color:'black'}}>
              Customer Name 
            </Typography>
            <AddCircleOutlinedIcon className='title-icon'/>
        </div>
          
          <div className='header-right'>
              <SearchOutlinedIcon className='header-icon'/>
              <Badge badgeContent={4} color="error" className='header-icon'>
                <NotificationsNoneOutlinedIcon color="action" />
              </Badge>
              <SettingsOutlinedIcon className='header-icon' />
              <HelpOutlineOutlinedIcon className='header-icon' />
              <AccountCircleOutlinedIcon className='header-icon' />
              <LogoutOutlinedIcon className='header-icon' />
          </div>
        </Toolbar>

      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className='sidebar-top'>
          <IconButton onClick={handleDrawerClose} className="logo-head">
            <div className='logo'>
              <KeyboardCommandKeyIcon className='logo-icon'/>
              <Typography variant='h5' sx={{color:'white'}}>Hanbiro</Typography>
              <Typography className='logo-text'>CRM</Typography>
            </div>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <MenuIcon className='menu-icon'/>}
          </IconButton>
        </DrawerHeader>
        <List className='sidebar-left'>
          {['Dashboard', 'My Work', 'Desk', 'Customer', 'Product', 'Demo Page', 'Favorites', 'My Works'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }} className='list-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 'gray',
                  }}
                >
                  {index === 0 && <GridViewOutlinedIcon className='item-active'/>}
                  {index === 1 && <EditOutlinedIcon />}
                  {index === 2 && <HeadphonesIcon />}
                  {index === 3 && <GroupOutlinedIcon />}
                  {index === 4 && <Inventory2OutlinedIcon />}
                  {index === 5 && <CropOutlinedIcon />}
                  {index === 6 && <BookmarksOutlinedIcon />}
                  {index === 7 && <DriveFileRenameOutlineOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box>
          <ActiveLastBreadcrumb />
        </Box>
        <Box>
          <DeskButton/>
        </Box>
        <BasicGrid />
      </Box>
    </Box>
  );
}