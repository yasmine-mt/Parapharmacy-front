import { createAsyncThunk } from '@reduxjs/toolkit';
import orderApi from '../../utils/api/orderApi';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    const orders = await orderApi.getOrders();
    return orders;
  }
);

export const fetchOrdersByUserId = createAsyncThunk(
  'products/fetchProductById',
  async (userId) => {
    const orders = await orderApi.getOrdersByUserId(userId);
    return orders;
  }
);

export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async ({ orderId, newStatus }) => {
    const updatedOrder = await orderApi.updateOrderStatus(orderId, newStatus);
    return updatedOrder;
  }
);

export const createOrder = (order) => async (dispatch) => {
  try {
    const createdOrder = await orderApi.createOrder(order);
    // Dispatch an action to update the state with the new order
    dispatch(orderCreated(createdOrder));
  } catch (error) {
    // Handle error if needed
    console.error('Error creating order:', error);
  }
};

const orderCreated = (order) => ({
  type: 'order/orderCreated',
  payload: order,
});

