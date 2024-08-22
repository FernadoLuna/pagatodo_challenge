import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
//types
import { BankState,banks } from '../types/banksTypes';
//api
import { getDataBanksApi } from '../../services/banksApi';

// Thunks
const downloadDataBanks = createAsyncThunk(
  'banksData/downloadDataBanks',
  async () => {
    try {
      const data  = await getDataBanksApi();
      if (data) {
       await AsyncStorage.setItem('banksData', JSON.stringify(data));
      }
      return data;
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      return error;
    }
  }
);


// Initial state
const initialState : BankState = {
  banks: null,
  has_data: false
}

// Slice
const banksSlice = createSlice({
  name: 'banksData',
  initialState,
  reducers: {
    setListBanks: (state, action: PayloadAction<banks[]>) => {
      state.banks = action.payload;
      state.has_data = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(downloadDataBanks.fulfilled, (state, action) => {
      state.banks = action.payload;
      state.has_data = true;
    });
  },
});

export const { setListBanks } = banksSlice.actions;
export default banksSlice.reducer;
export { downloadDataBanks };