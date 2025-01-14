import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'

// Assign configureStore to a const variable store -- Now provide this to main.jsx to make it -- Globally accessible
export const store = configureStore({
    reducer: {
        allCart : cartSlice
    }
})