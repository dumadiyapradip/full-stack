import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { localhost } from '../../../localStores.js'


export const HomeFatchdata = createAsyncThunk("HomeFatchdata",
    async () => {
        const responec = await fetch(`${localhost}/eventmenegment/web/HomeSlider`)
        const result = await responec.json();
        const dataproviderPricingFirstSlide = (result.data.dataPass[0].MianSlide)
        const dataproviderPricingSecondSlide = (result.data.dataPass[0].MianProductInHome)
        const dataproviderPricingThirdSlide = (result.data.dataPass[0].SubProductCollection)

        const arraypass = [dataproviderPricingFirstSlide, dataproviderPricingSecondSlide, dataproviderPricingThirdSlide]
        return arraypass
    }
)
const initialState = {
    isLoader: false,
    HomeData: null,
    isErrow: false
}
// eslint-disable-next-line react-refresh/only-export-components
export const HomeFatchdataProvider = createSlice({
    name: 'counter',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(HomeFatchdata.pending, (state) => {
            state.isLoader = true
        })
        builder.addCase(HomeFatchdata.fulfilled, (state, action) => {
            state.isLoader = false
            state.HomeData = action.payload
        })
        builder.addCase(HomeFatchdata.rejected, (state, action) => {
            state.isLoader = false
            state.isErrow = true
        })
    }
})
export default HomeFatchdataProvider.reducer