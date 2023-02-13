import { createSlice } from '@reduxjs/toolkit'
import {cookieGet} from "../hooks/cookie";

const cookie = JSON.parse(cookieGet())

const initialState = {
    user: {email: cookie.email, name: cookie.fullName} || {},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        removeUser : (state) => {
            state.user = {}
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer
