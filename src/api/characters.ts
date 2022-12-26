import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacterSlice } from 'store/slices/characterSlice';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getAllCharacters = createAsyncThunk<
  ICharacterSlice,
  void,
  { rejectValue: { message: string } }
>('/characters', async (_, thunkApi) => {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    const data = await response.json();

    if (!response.ok) {
      return thunkApi.rejectWithValue({
        message: data.message,
      });
    }
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue({
      message: (err as Error).message,
    });
  }
});
