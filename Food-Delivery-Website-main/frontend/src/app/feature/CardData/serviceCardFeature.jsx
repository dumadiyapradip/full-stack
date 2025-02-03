/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { localhost } from '../../../localStores.js'

export const Fatchdata = createAsyncThunk("Fatchdata",
    async () => {
        const responec = await fetch(`${localhost}/eventmenegment/web/ServiseSlide`)
        const result = await responec.json();
        const dataproviderPricingSecondSlide = (result.data.dataPass[0].MianProductInServise)
        // console.log("ServiceCardSlice data",dataproviderPricingSecondSlide)
        return dataproviderPricingSecondSlide
    }
)
const initialState = {
    isLoader: false,
    data: null,
    isErrow: false
}
// eslint-disable-next-line react-refresh/only-export-components
export const ServiceCardSlice = createSlice({
    name: 'counter',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(Fatchdata.pending, (state) => {
            state.isLoader = true
        })
        builder.addCase(Fatchdata.fulfilled, (state, action) => {
            state.isLoader = false
            state.data = action.payload
        })
        builder.addCase(Fatchdata.rejected, (state, action) => {
            state.isLoader = false
            state.isErrow = true
        })
    }
})
export default ServiceCardSlice.reducer