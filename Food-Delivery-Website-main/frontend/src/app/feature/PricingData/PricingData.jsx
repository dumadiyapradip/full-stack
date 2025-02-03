import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { localhost } from '../../../localStores.js'


export const PracingDataFatch = createAsyncThunk("PracingDataFatch",
    async () => {
        const responec = await fetch(`${localhost}/eventmenegment/web/pricing`)
        const result = await responec.json();
        const dataproviderPricingFirstSlide = (result.data.dataPass.PricingFirstSlide)
        const dataproviderPricingSecondSlide = (result.data.dataPass.PricingSecondSlide)
        const dataproviderPricingThirdSlide = (result.data.dataPass.PricingThirdSlide)
        const dataproviderPricinGImg1 = (result.data.dataPass.OneImgSlide)
        const dataproviderPricinGImg2 = (result.data.dataPass.TwoImgSlide)

        const arraypass = [dataproviderPricingFirstSlide, dataproviderPricingSecondSlide, dataproviderPricingThirdSlide,dataproviderPricinGImg1,dataproviderPricinGImg2]
       
             return arraypass
    }
)

const initialState = {
    isLoader: false,
    PricingDataFatchValue: null,
    isErrow: false
}

// eslint-disable-next-line react-refresh/only-export-components
export const PricingProductMaxPass = createSlice({
    name: 'PricingDataFatchValue',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(PracingDataFatch.pending, (state,) => {
            state.isLoader = true
        })
        builder.addCase(PracingDataFatch.fulfilled, (state, action) => {
            state.isLoader = false
            state.PricingDataFatchValue = action.payload
        })
        builder.addCase(PracingDataFatch.rejected, (state) => {
            state.isLoader = false
            state.isErrow = true
        })
    }
})
export default PricingProductMaxPass.reducer