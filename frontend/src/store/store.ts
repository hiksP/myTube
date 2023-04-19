import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducers'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer
} from 'redux-persist'

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedRecuder = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedRecuder,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
