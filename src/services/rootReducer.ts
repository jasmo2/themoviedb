import { combineReducers } from '@reduxjs/toolkit'

import { reducers } from './slices'

const rootReducer = combineReducers({ ...reducers })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
