/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { localhost } from '../../../localStores.js'


async function pass(Data) {

    try {

        const response = await fetch(`${localhost}/eventmenegment/web/User/AddCardUrl`, {
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
        const response = await fetch('http://localhost:500/eventmenegment/web/User/deletCard', {
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

export const GateDataFetch = createAsyncThunk("GateData",
    async () => {
        const responec = await fetch('http://localhost:500/eventmenegment/web/User/AddCard')
        const result = await responec.json();
        const dataproviderPricingSecondSlide = (result.data[0].AddToCard)
        return dataproviderPricingSecondSlide
    }
)

const initialState = {
    isLoader: false,
    Data: [],
    isErrow: false,
    CurrentDataProvider: null,

}
// eslint-disable-next-line react-refresh/only-export-components
export const addToCardSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        AddToCardProvider: (state, action) => {
            pass(action.payload)
            state.Data.push(action.payload);
        },
        removeToCardProvider: (state, action) => {
            delet(action.payload)
            state.Data = state.Data.filter(item => item._id !== action.payload)
            if (state.Data.length < 0) {
                state.CurrentDataProvider = null
                state.Data = null
            }
            else {
                state.CurrentDataProvider = state.Data[0]
            }
        },
        current: (state, action) => {
            // if (action.payload) {
            //     if (state.Data.length < 0) {
            //         state.CurrentDataProvider = null
            //         state.Data = null
            //     }
            //     else {
            //         state.CurrentDataProvider = state.Data[0]
            //     }
            // }
            // else {
            state.CurrentDataProvider = state.Data.find(item => item._id === action.payload);
            // }

        }
    },
    extraReducers: (builder) => {
        builder.addCase(GateDataFetch.pending, (state) => {
            state.isLoader = true
        })
        builder.addCase(GateDataFetch.fulfilled, (state, action) => {
            state.isLoader = false
            state.Data = action.payload
        })
        builder.addCase(GateDataFetch.rejected, (state, action) => {
            state.isLoader = false
            state.isErrow = true
        })
    }
})


export const { AddToCardProvider, removeToCardProvider, current } = addToCardSlice.actions
export default addToCardSlice.reducer
