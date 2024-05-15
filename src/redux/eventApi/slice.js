import { createSlice } from '@reduxjs/toolkit';
import {
  addParticipantForEvent,
  fetchEventParticipants,
  fetchEvents,
} from './operations';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addParticipantForEvent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addParticipantForEvent.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addParticipantForEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchEventParticipants.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventParticipants.fulfilled, (state, action) => {
        state.loading = false;
        // handle success if needed
      })
      .addCase(fetchEventParticipants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const eventsReduser = eventsSlice.reducer;
