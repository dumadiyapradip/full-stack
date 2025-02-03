/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { localhost } from '../../../localStores.js'

export const NavDataProvider = createAsyncThunk("NavDataProvider",
    async () => {
        const responec = await fetch(`${localhost}/eventmenegment/web/User/exciteUser`)
        const result = await responec.json();
        return result.data.login
    }
)
const initialState = {
    isLoader: false,
    NavData: null,
    isErrow: false
}
// eslint-disable-next-line react-refresh/only-export-components
export const NavDataSlide = createSlice({
    name: 'counter',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(NavDataProvider.pending, (state) => {
            state.isLoader = true
        })
        builder.addCase(NavDataProvider.fulfilled, (state, action) => {
            state.isLoader = false
            state.NavData = action.payload
        })
        builder.addCase(NavDataProvider.rejected, (state, action) => {
            state.isLoader = false
            state.isErrow = true
        })
    }
})
export default NavDataSlide.reducer