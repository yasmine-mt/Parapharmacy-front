import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../utils/api/userApi";

// Fetch all users
export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const users = await userApi.getUsers();
  return users;
});

// Fetch a single user by ID
export const getUser = createAsyncThunk("user/getUserById", async (userId) => {
  const user = await userApi.getUser(userId);
  return user;
});

// Login user
export const login = createAsyncThunk("user/login", async (loginData) => {
  const userId = await userApi.login(loginData);
  return userId;
});

// Register a new user
export const registerUser = createAsyncThunk("user/registerUser", async (registerData) => {
  const response = await userApi.registerUser(registerData);
  return response;
});
