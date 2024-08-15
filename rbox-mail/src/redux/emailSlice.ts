import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Email,
  SingleEmail,
  EmailResponse,
  SingleEmailResponse,
  ResetResponse,
} from "./types";

const initialState = {
  emails: [] as Email[],
  email: [] as SingleEmail[],
  loading: false,
  error: null as string | null,
  replySuccess: null as string | null,
};

// Fetch all emails
export const fetchEmails = createAsyncThunk(
  "emails/fetchEmails",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.get<EmailResponse>(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Fetch a single email by thread ID
export const fetchEmailByThreadId = createAsyncThunk(
  "emails/fetchEmailByThreadId",
  async (threadId: number, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get<SingleEmailResponse>(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// In your Redux slice file (e.g., emailSlice.ts)

export const replyToEmail = createAsyncThunk(
  "emails/replyToEmail",
  async (
    { threadId, emailData }: { threadId: number; emailData: any },
    thunkAPI
  ) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        emailData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data; // This would likely return a success message or updated email thread
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Delete email by thread ID
export const deleteEmail = createAsyncThunk(
  "emails/deleteEmail",
  async (threadId: number, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return threadId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Reset onebox
export const resetOnebox = createAsyncThunk(
  "emails/resetOnebox",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post<SingleEmailResponse>(
        "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchEmails
      .addCase(fetchEmails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmails.fulfilled, (state, action) => {
        state.loading = false;
        state.emails = action.payload;
      })
      .addCase(fetchEmails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle fetchEmailByThreadId
      .addCase(fetchEmailByThreadId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmailByThreadId.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload;
      })
      .addCase(fetchEmailByThreadId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(replyToEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.replySuccess = null;
      })
      .addCase(replyToEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.replySuccess = "Reply sent successfully";
      })
      .addCase(replyToEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Handle deleteEmail
      .addCase(deleteEmail.fulfilled, (state, action) => {
        state.emails = state.emails.filter(
          (email) => email.threadId !== action.payload
        );
      })

      // Handle resetOnebox
      .addCase(resetOnebox.fulfilled, (state, action) => {
        state.emails = [];
        state.email = action.payload;
      });
  },
});

export default emailSlice.reducer;
