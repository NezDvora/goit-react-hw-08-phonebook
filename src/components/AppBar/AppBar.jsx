import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLogOut } from 'redux/operations';
import { getLoggin, getUserName } from 'redux/selectors';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const isLoggedIn = useSelector(getLoggin);
  const user = useSelector(getUserName);

  const dispatch = useDispatch();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          disableGutters
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '100px' }}>
            <Link to="/">
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <RecentActorsIcon
                  sx={{ display: { xs: 'none', md: 'flex', color: 'white' } }}
                />
                <Typography
                  variant="h4"
                  noWrap
                  component="p"
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                </Typography>
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <NavLink to="/">
                <Button variant="contained" component="p">
                  Home
                </Button>
              </NavLink>
              <NavLink to="/contacts">
                <Button variant="contained" component="p">
                  Contacts
                </Button>
              </NavLink>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              <MenuItem key="home" onClick={handleCloseNavMenu}>
                <NavLink to="/">
                  <Button variant="outlined" component="span">
                    Home
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem key="Contacts" onClick={handleCloseNavMenu}>
                <NavLink  to="/contacts">
                  <Button variant="outlined" component="span">
                    Contacts
                  </Button>
                </NavLink>
              </MenuItem>
              {!isLoggedIn && (
                <MenuItem key="SignUp" onClick={handleCloseNavMenu}>
                  <NavLink  to="/contacts">
                    <Button variant="outlined" component="span">
                      Sign up
                    </Button>
                  </NavLink>
                </MenuItem>
              )}
              {!isLoggedIn && (
                <MenuItem key="LogIn" onClick={handleCloseNavMenu}>
                  <NavLink  to="/contacts">
                    <Button variant="outlined" component="span">
                      Log in
                    </Button>
                  </NavLink>
                </MenuItem>
              )}
            </Menu>
          </Box>
          {!isLoggedIn && (
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <RecentActorsIcon
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              />
            </Box>
          )}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: '10px',
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: '10px',
            }}
          >
            {!isLoggedIn && (
              <>
                <NavLink to="/registration">
                  <Button variant="contained" component="p">
                    Sign up
                  </Button>
                </NavLink>
                <NavLink to="/login">
                  <Button
                    sx={{ backgroundColor: 'white', color: '#1976d2' }}
                    variant="contained"
                    component="span"
                  >
                    Log in
                  </Button>
                </NavLink>
              </>
            )}
          </Box>
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings" arrow onClick={handleOpenUserMenu}>
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'flex' },
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Typography textAlign="center">Hello, {user}</Typography>
                  <IconButton sx={{ p: 0 }}>
                    <AccountCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>
              </Tooltip>
              <Menu
                sx={{ mt: '5px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key="Logout"
                  onClick={() => {
                    handleCloseUserMenu();
                    dispatch(fetchLogOut());
                  }}
                >
                  <LogoutIcon />
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
