import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateFilters = {
    searchQuery: '',
    byCategories: '',
    sortBy: ['relevance', 'lowest_price', 'highest_price', 'newest', 'best-sellers'],
}

const initialState = {
    isLoading: false,
    products: [],
    categories: [],
    ...initialStateFilters
}

const productsSlice = createSlice({
    name: 'products',
    initialState
})

export default productsSlice.reducer