import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
  isLoading: false,
  products: [],
    categories: [],
  sorts: ['relevance', 'lowest_price', 'highest_price', 'newest', ],
  error: null,
};


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://real-time-amazon-data.p.rapidapi.com/deals-v2',
      params: {
        country: 'US',
        min_product_star_rating: 'ALL',
        price_range: 'ALL',
        discount_range: 'ALL'
      },
      headers: {
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response.data.data.deals
    } catch (error) {
      console.error(error);
    }
  }
);

// Redux slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setByCategory: (state, action) => {
      state.byCategory = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    clearFilters: (state) => {
      state.searchQuery = '';
      state.byCategory = '';
      state.sortBy = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearchQuery, setByCategory, setSortBy, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;
