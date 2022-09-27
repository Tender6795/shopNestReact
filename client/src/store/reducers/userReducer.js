import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { asyncActionsCreator } from '../../store/reducers/reducerHelper'
import * as api from '../../api'

export const login = createAsyncThunk(
  'user/login',
  async userCredentials => await api.login(userCredentials)
)
export const registration = createAsyncThunk(
  'user/registration',
  async registrationData => await api.registration(registrationData)
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token'),
  },
  reducers: {
    logout: state => {
      state.token = null
    },
  },
  extraReducers: {
    ...asyncActionsCreator(
      login,
      'login',
      {
        fulfilled: (state, { payload }) => {
          state.isLoginLoading = false
          state.user = payload.user
          state.token = payload.token
        },
      },
      { loadingHandler: true }
    ),
    ...asyncActionsCreator(registration, 'registration', {
      fulfilled: (state, { payload }) => {
        state.token = payload.token
        state.user = payload.user
        state.isUserCreateSuccessful = true
      },
    }),
  },
})
export const { logout } = userSlice.actions

export default userSlice.reducer
