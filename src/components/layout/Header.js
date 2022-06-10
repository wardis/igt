import React, { useState } from 'react';

import logo from '../../logo.svg';

import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Divider,
} from '@mui/material';
// import { MenuIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const pages = [
  { label: 'Lorem Ipsum' },
  { label: 'Lorem Ipsum', style: 'button' },
  { label: 'Lorem Ipsum', style: 'button' },
];
const secondaryLinks = ['Link 1', 'Link 2', 'Link 3'];

const Logo = () => (
  <Stack
    direction='row'
    sx={{
      width: '150px',
      flexGrow: 1,
      alignItems: 'center',
    }}
  >
    <img src={logo} className='App-logo' height='30px' alt='logo' />
    <Typography>Logo</Typography>
  </Stack>
);

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: 'center',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              edge='start'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div'>
              Menu
            </Typography>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: 'white',
                  display: 'block',
                  textTransform: 'capitalize',
                }}
                variant={page.style == 'button' ? 'contained' : 'text'}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'flex-end',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Stack
            direction='row'
            sx={{ display: { xs: 'none', md: 'flex' } }}
            alignItems='center'
            divider={bull}
          >
            {secondaryLinks.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: 'white',
                  display: 'block',
                  textTransform: 'capitalize',
                }}
                variant={page.style == 'button' ? 'contained' : 'text'}
              >
                {page}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
