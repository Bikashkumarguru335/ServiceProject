import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            // Check if item already exists in cart based on ID
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                // Add new item with quantity 1
                state.items.push({ ...newItem, quantity: 1 });
            }

            // Recalculate Total Amount
            state.totalAmount = state.items.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0
            );
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            }

            // Recalculate Total Amount
            state.totalAmount = state.items.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0
            );
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    // If quantity is 1, remove the item
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity--;
                }
            }

            // Recalculate Total Amount
            state.totalAmount = state.items.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0
            );
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);

            // Recalculate Total Amount
            state.totalAmount = state.items.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0
            );
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

