import { Button, Card, Modal, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { isEmail } from '../utils'

export const RegistrationOrLoginModal = ({
  open,
  handleClose,
  isLogin  ,
}) => {
  const [formData, setFormData] = useState({ email: null, password: null })
  const [isValid, setIsValid] = useState(false)
  const { email, password } = formData
  const handleChangeInput = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    isValidForm()
  }

  const handleOk = () => {
    if (!email || !password) {
      return
    }
  }

  const isValidForm = () => {
    setIsValid(isEmail(email) && password)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <StyledCard>
      <Typography variant="h4" component='h4'>{ isLogin ? 'Login' : 'Registration'}</Typography>
        <StyledInput
          required
          name="email"
          key="email"
          label={'email'}
          error={!email && email !== null}
          fullWidth
          value={email || ''}
          onChange={handleChangeInput}
        />
        <StyledInput
          required
          name="password"
          key="password"
          label={'password'}
          error={!password && password !== null}
          fullWidth
          value={password || ''}
          onChange={handleChangeInput}
        />

        <StyledContainerLeft>
          <Button color="secondary" variant="outlined" onClick={handleClose}>
            Cansel
          </Button>
          <ButtonWithLeftMargin
            color="secondary"
            variant="contained"
            onClick={handleOk}
            autoFocus
            disabled={!isValid}
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
