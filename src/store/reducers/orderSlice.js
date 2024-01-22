import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders, updateOrderStatus } from "../actions/orderActions";

const initialState = {
  orders: [],
  status: 'idle',
  error: null
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderCreated: (state, action) => {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        // Find the index of the updated order in the state
        const updatedOrderIndex = state.orders.findIndex(order => order.orderID === action.payload.orderID);

        if (updatedOrderIndex !== -1) {
          // Update the order in the state with the new status
          state.orders[updatedOrderIndex].status = action.payload.status;
        }
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        // Handle the case where the updateOrderStatus request is rejected
        state.error = action.error.message;
      });
  },
});

export const { orderCreated } = orderSlice.actions;

export default orderSlice.reducer;
