import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
//types
import { BankState,banks } from '../types/banksTypes';


// Thunks
const downloadDataBanks = createAsyncThunk(
  'banksData/downloadDataBanks',
  async () => {
    try {
      const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
      const data = await response.json();
      if (data) {
       await AsyncStorage.setItem('banksData', JSON.stringify(data));
       console.log(data);
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