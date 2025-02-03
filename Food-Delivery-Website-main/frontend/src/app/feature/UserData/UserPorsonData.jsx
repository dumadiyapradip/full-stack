
import { localhost } from '../../../localStores.js'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const UserDataFatch = createAsyncThunk("UserDataFatch",
    async () => {
        const responec = await fetch(`${localhost}/eventmenegment/web/User/UserDataPass`)
        const data = await responec.json();
        const UserDataPassSucees = data.data.user
        return UserDataPassSucees
    }
)
const initialState = {
    isLoader: false,
    UserDataStore: null,
    isErrow: false
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserDataAddSlide = createSlice({
    name: 'counter',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(UserDataFatch.pending, (state,) => {
            state.isLoader = true
        })
        builder.addCase(UserDataFatch.fulfilled, (state, action) => {
            state.isLoader = false
            state.UserDataStore = action.payload
        })
        builder.addCase(UserDataFatch.rejected, (state) => {
            state.isErrow = true
        })
    }
})
export default UserDataAddSlide.reducer