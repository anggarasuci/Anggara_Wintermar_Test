import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './reducers/profile.reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
