/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { localhost } from '../../../localStores.js'

export const ProductFetch = createAsyncThunk("ProductFetch",
    async () => {
        const responec = await fetch(`${localhost}/eventmenegment/web/ProductSlide`)
        const result = await responec.json();
        const dataproviderPricingSecondSlide = (result.data.dataPass[0].MianProductInServise)
        return dataproviderPricingSecondSlide
    }
)
const initialState = {
    isLoader: false,
    ProductData: null,
    isErrow: false
}
// eslint-disable-next-line react-refresh/only-export-components
export const ProductCardSlice = createSlice({
    name: 'counter',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(ProductFetch.pending, (state) => {
            state.isLoader = true
        })
        builder.addCase(ProductFetch.fulfilled, (state, action) => {
            state.isLoader = false
            state.ProductData = action.payload
        })
        builder.addCase(ProductFetch.rejected, (state, action) => {
            state.isLoader = false
            state.isErrow = true
        })
    }
})
export default ProductCardSlice.reducer