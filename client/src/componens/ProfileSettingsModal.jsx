import { useEffect, useRef, useState } from 'react'
import { Button, Card, Modal, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { userDataSelector } from '../store/selectors'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone'

export default function ProfileSettingsModal({ open, handleClose }) {
  const userSelector = useSelector(userDataSelector)
  const [user, setUser] = useState(userSelector)
  const imgInput = useRef()
  const [picture, setPicture] = useState('')

  const { firstName, lastName, patronymic } = user

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleClick = () => {
    imgInput.current.click()
    alert('click1')
  }

  const handleUpload = e => {
    alert('click2')
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledCard>
        <Typography variant="h4" component="h4">
          Profile Settings
        </Typography>

        <StyledInput
          name="firstName"
          key="firstName"
          label={'first name'}
          fullWidth
          value={firstName || ''}
          onChange={handleChangeInput}
        />

        <StyledInput
          name="lastName"
          key="lastName"
          label={'last name'}
          fullWidth
          value={lastName || ''}
          onChange={handleChangeInput}
        />

        <StyledInput
          name="patronymic"
          key="patronymic"
          label={'patronymic'}
          fullWidth
          value={patronymic || ''}
          onChange={handleChangeInput}
        />

        <StyledImageContainer
          onClick={handleClick}
          aria-hidden="true"
          style={{
            background: `url(${picture}) center center/cover no-repeat`,
          }}
        >
          <HiddenContainer>
            <AddAPhotoTwoToneIcon fontSize="small" />
            <Typography variant="h6">Upload Photo</Typography>
          </HiddenContainer>
        </StyledImageContainer>
        <HiddenInput
          type="file"
          accept="image/x-png,image/jpeg,image/gif"
          ref={imgInput}
          onChange={handleUpload}
        />

        <StyledContainerLeft>
          <Button color="secondary" variant="outlined" onClick={handleClose}>
            Cansel
          </Button>
          <ButtonWithLeftMargin
            color="secondary"
            variant="contained"
            // onClick={handleOkButton}
            autoFocus
            // disabled={!isValid}
          >
            Ok
          </ButtonWithLeftMargin>
        </StyledContainerLeft>
      </StyledCard>
    </Modal>
  )
}

const StyledCard = styled(Card)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '20px',
}))

const StyledContainerLeft = styled('div')(() => ({
  display: 'flex',
  margin: '10px 0 0 0',
  justifyContent: 'flex-end',
}))

const StyledInput = styled(TextField)(() => ({
  margin: '10px 0',
}))

const ButtonWithLeftMargin = styled(Button)(() => ({
  marginLeft: '10px',
}))

const HiddenInput = styled('input')(() => ({
  display: 'none',
  width: '0',
}))

const StyledImageContainer = styled('div')(() => ({
  backgroundColor: 'rgba(0, 0, 0, 0.38);',
  height: '200px',
  borderRadius: '16px',
  marginBottom: '16px',
  width: 'auto',
  boxShadow: '0px 7px 42px rgba(56, 0, 138, 0.04)',
}))

const HiddenContainer = styled('div')(() => ({
  opacity: 0,
  width: '100%',
  height: '100%',
  borderRadius: '16px',
  '&:hover': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(190, 200, 210, 0.5)',
    cursor: 'pointer',
    opacity: 1,
  },
}))
