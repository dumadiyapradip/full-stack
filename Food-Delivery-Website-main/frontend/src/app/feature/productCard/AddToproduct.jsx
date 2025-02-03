/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { localhost } from '../../../localStores.js'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

async function pass(Data) {

    try {

        const response = await fetch(`${localhost}/eventmenegment/web/User/ProductCardUrl`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: Data }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // eslint-disable-next-line no-unused-vars
        const data = await response.json();

    } catch (error) {
        console.error('Error sending data:', error);
    }
}
async function delet(Data) {
    try {
        const response = await fetch('http://localhost:500/eventmenegment/web/User/ProductdeletCard', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: Data }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // eslint-disable-next-line no-unused-vars
        const data = await response.json();

    } catch (error) {
        console.error('Error sending data:', error);
    }
}

export const ProductFetchData = createAsyncThunk("ProductFetchData",
    async () => {
        const responec = await fetch('http://localhost:500/eventmenegment/web/User/ProductCurrentData')
        const result = await responec.json();
        const dataproviderPricingSecondSlide = (result.data[0].ProductAddToCard)
        return dataproviderPricingSecondSlide
    }
)
const initialState = {
    isLoader: false,
    Data: [],
    isErrow: false,
    ProductCurrentDataProvider: null

}
// eslint-disable-next-line react-refresh/only-export-components
export const ProductaddToCardSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        AddToCardProdcut: (state, action) => {
            pass(action.payload)
            state.Data.push(action.payload);
        },
        removeToCardProdcut: (state, action) => {
            delet(action.payload)
            state.Data = state.Data.filter(item => item._id !== action.payload)
            if (state.Data.length < 0) {
                state.ProductCurrentDataProvider = null
                state.Data = null
            }
            else {
                state.ProductCurrentDataProvider = state.Data[0]
            }
        },
        ProductCurrent: (state, action) => {
            state.ProductCurrentDataProvider = state.Data.find(item => item._id === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ProductFetchData.pending, (state) => {
            state.isLoader = true
        })
        builder.addCase(ProductFetchData.fulfilled, (state, action) => {
            state.isLoader = false
            state.Data = action.payload
        })
        builder.addCase(ProductFetchData.rejected, (state, action) => {
            state.isLoader = false
            state.isErrow = true
        })
    }
})


export const { AddToCardProdcut, removeToCardProdcut, ProductCurrent } = ProductaddToCardSlice.actions
export default ProductaddToCardSlice.reducer
