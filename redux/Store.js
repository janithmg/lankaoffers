import { configureStore } from "@reduxjs/toolkit"
import { SupermarketReducer } from "./Reducers/SupermarketReducer";

const Store = configureStore({
    reducer: {
        products: SupermarketReducer,
    }
})

export default Store;