import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacterSlice } from 'store/slices/characterSlice';
import { ISearchCharactersProps } from './characters.types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = createAsyncThunk<
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

export const searchCharacters = createAsyncThunk<
  ICharacterSlice,
  ISearchCharactersProps,
  { rejectValue: { message: string } }
>('/search', async ({ query, queryValue, oldQueryValue }, thunkApi) => {
  try {
    const response = await fetch(
      `${BASE_URL}/character/${oldQueryValue ? `${oldQueryValue}&` : '?'}${query}=${queryValue}`
    );

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
