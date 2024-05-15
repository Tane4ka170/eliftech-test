import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://eliftech-test-back.onrender.com/api/events';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/?page=${page}&limit=10`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addParticipantForEvent = createAsyncThunk(
  'events/addParticipantForEvent',
  async ({ id, credentials }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/${id}`, credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchEventParticipants = createAsyncThunk(
  'events/fetchEventParticipants',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
