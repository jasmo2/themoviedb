import {
  AnyAction,
  Dispatch,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'
import get from 'lodash/get'

import { MovieProps } from 'Components/MovieCards/data'
import { AppThunk } from './store'
import TheMovieDBApi from './themoviedb.api'

type configProps = {
  images: object
}

let configState: configProps = {
  images: {},
}

const configSlice = createSlice({
  name: 'GET_CONFIG',
  initialState: configState,
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

interface popularMovieProps {
  popularMovies: MovieProps[]
}
let popularMovieState: popularMovieProps = {
  popularMovies: [],
}

const popularMovieSlice = createSlice({
  name: 'GET_POPULAR_MOVIES',
  initialState: popularMovieState,
  reducers: {
    setPopularMovies(state, action: PayloadAction<MovieProps[]>) {
      state.popularMovies = [].concat(action.payload as any) as MovieProps[]
    },
  },
})

export const getPopularMovies = (): AppThunk => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const response: any = await TheMovieDBApi.getPopularMovies()
  const result = get(response, 'results', [])
  dispatch(setPopularMovies(result))
}
export const { setPopularMovies } = popularMovieSlice.actions

export const reducers = {
  configSlice: configSlice.reducer,
  popularMovieSlice: popularMovieSlice.reducer,
}
