import { TextField, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function AddressEdit({ address }) {
  const handleChangeInput = e => {
    const { name, value } = e.target
  }
  const { country, street, houseNumber, roomNumber, postalCode, id } = address
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
    </StyledContainer>
  )
}

const StyledInput = styled(TextField)(() => ({
  margin: '10px 0',
  width: '40%',
}))

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
}))
