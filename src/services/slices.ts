import {
  AnyAction,
  Dispatch,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'

import { AppThunk } from './store'
import TheMovieDBApi from './themoviedb.api'

type configProps = {
  images: object
}

let initialState: configProps = {
  images: {},
}

const configSlice = createSlice({
  name: 'GET_CONFIG',
  initialState: initialState,
  reducers: {
    setConfig(state, action: PayloadAction<object>) {
      state.images = action.payload
    },
  },
})

export const getConfig = (): AppThunk => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const response: any = await TheMovieDBApi.getConfig()
  dispatch(setConfig(response))
}

export const { setConfig } = configSlice.actions

export const reducers = {
  configSlice: configSlice.reducer,
}
