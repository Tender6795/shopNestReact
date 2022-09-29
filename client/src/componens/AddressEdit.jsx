import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import { styled } from '@mui/material/styles'
import * as uuid from 'uuid'

export default function AddressEdit({ address, cancelHandle }) {
  
  const initAddress = {
    country: 'Ukraine',
    street: '',
    houseNumber: '',
    roomNumber: '',
    postalCode: '',
    id: uuid.v4(),
  }
  
  const [addressState, setAddressState] = useState(
    address || initAddress
  )

  const handleChangeInput = e => {
    const { name, value } = e.target
  }
  const { country, street, houseNumber, roomNumber, postalCode, id } = addressState
  return (
    <StyledContainer>
      <StyledInput
        name="country"
        key="country"
        label={'country'}
        value={country || ''}
        onChange={handleChangeInput}
      />
      <StyledInput
        name="street"
        key="street"
        label={'street'}
        value={street || ''}
        onChange={handleChangeInput}
      />
      <StyledInput
        name="houseNumber"
        key="houseNumber"
        label={'house number'}
        value={houseNumber || ''}
        onChange={handleChangeInput}
      />

      <StyledInput
        name="roomNumber"
        key="roomNumber"
        label={'room number'}
        value={roomNumber || ''}
        onChange={handleChangeInput}
      />

      <StyledInput
        name="postalCode"
        key="postalCode"
        label={'postal code'}
        value={postalCode || ''}
        onChange={handleChangeInput}
      />
      <StyledButtonContainer>
        <Button color="success">
          <CheckCircleIcon fontSize="large" />
        </Button>

        <Button color="error" onClick={cancelHandle}>
          <CancelIcon fontSize="large" />
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  )
}

const StyledInput = styled(TextField)(() => ({
  margin: '10px 0',
  width: '40%',
}))

const StyledButtonContainer = styled('div')(() => ({
  margin: '10px 0',
  width: '40%',
  display: 'flex',
  justifyContent: 'flex-start',
}))

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
}))
