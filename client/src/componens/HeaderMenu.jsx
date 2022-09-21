import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { RegistrationOrLoginModal } from './RegistrationOrLoginModal'

export default function HeaderMenu() {
  const [isAuth, setIsAuth] = useState(false)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [openRegistrationModal, setOpenRegistrationModal] = useState(false)
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const settings = isAuth
    ? [
        {
          name: 'Profile',
          handle: () => {
            alert('Profile')
          },
        },
        {
          name: 'Logout',
          handle: () => {
            alert('Logout')
          },
        },
      ]
    : [
        {
          name: 'Login',
          handle: () => {
            setOpenLoginModal(true)
          },
        },
        {
          name: 'Registration',
          handle: () => {
            setOpenRegistrationModal(true)
          },
        },
      ]
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <>
      {openRegistrationModal && <RegistrationOrLoginModal
        open={openRegistrationModal}
        handleClose={() => setOpenRegistrationModal(false)}
        isLogin={false}
      />}

      {openLoginModal &&<RegistrationOrLoginModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
        isLogin={true}
      />}

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map(({ name, handle }) => (
            <MenuItem key={name} onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={handle}>
                {name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}
