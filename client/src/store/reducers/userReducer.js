import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { asyncActionsCreator } from '../../store/reducers/reducerHelper'
import * as api from '../../api'
import { getUserFromToken } from '../../utils'

export const login = createAsyncThunk(
  'user/login',
  async userCredentials => await api.login(userCredentials)
)
export const registration = createAsyncThunk(
  'user/registration',
  async registrationData => await api.registration(registrationData)
)


const tokenFromLocalStorage = localStorage.getItem('token') 


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: tokenFromLocalStorage,
    user: getUserFromToken(tokenFromLocalStorage) 
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
          state.user = getUserFromToken(payload.token) 
          state.token = payload.token
        },
      },
      { loadingHandler: true }
    ),
    ...asyncActionsCreator(registration, 'registration', {
      fulfilled: (state, { payload }) => {
        state.token = payload.token
        state.user = getUserFromToken(payload.token) 
        state.isUserCreateSuccessful = true
      },
    }),
  },
})
export const { logout } = userSlice.actions

export default userSlice.reducer
