import { createSlice } from "@reduxjs/toolkit";

export const bookingCartSlice = createSlice({
    initialState: [],
    name: 'bookingCart',
    reducers: {
        addServiceToCart: (state , action)=>{
            const payloadClone = {...action.payload}
            // console.log(payloadClone)
            state.push(payloadClone);
            // console.log(state.length)
            
        },
        removeFromCart: (state , action)=> {
            return state.filter((service)=>{
                return service.uuid !== action.payload.uuid
            });
        }

    }
})

export const {addServiceToCart , removeFromCart} = bookingCartSlice.actions;
export const cartReducer =  bookingCartSlice.reducer;