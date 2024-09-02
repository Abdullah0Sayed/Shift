import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const bookingCartSlice = createSlice({
    initialState: [],
    name: 'bookingCart',
    reducers: {
        addServiceToCart: (state, action) => {
            const payloadClone = { ...action.payload };
            
            // تحقق من وجود الخدمة في العربة بالفعل
            const isFound = state.some(service => service.uuid === payloadClone.uuid);
            
            if (isFound) {
                Swal.fire({
                    title: 'تنبيه!',
                    text: 'الخدمة مضافة بالفعل في عربة شرائك',
                    icon: 'warning',
                    confirmButtonText: 'موافق'
                });
                return;
            } else {
                state.push(payloadClone);
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((service) => service.uuid !== action.payload.uuid);
        },
        clearCart: (state , action)=>{
            return [];
        }
    }
});

export const { addServiceToCart, removeFromCart , clearCart} = bookingCartSlice.actions;
export const cartReducer = bookingCartSlice.reducer;
