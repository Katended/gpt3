// chatSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from 'https://cdn.jsdelivr.net/npm/@gradio/client/+esm';

export const fetchChatResponse = createAsyncThunk(
  'chat/fetchChatResponse',
  async (message) => {
    const falcon = await client('https://huggingfaceh4-falcon-chat.hf.space');

    return new Promise((resolve, reject) => {
      let timeoutId;

      falcon.submit(1, [message, [], '', 0.8, 0.9])
        .on('data', (evt) => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }

          // Set a new timeout for 5 seconds
          timeoutId = setTimeout(() => {
            resolve(evt.data[0][0][1]);
          }, 1000); // 5000 m
        })
        .on('error', (error) => {
          reject(error); // Reject the Promise in case of an error
        });
    });
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatResponse.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.messages.push({ type: 'user-message', text: action.meta.arg });
      })
      .addCase(fetchChatResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push({ type: 'bot-message', text: action.payload });
      })
      .addCase(fetchChatResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chatSlice.reducer;
