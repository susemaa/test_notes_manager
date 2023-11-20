import { configureStore, combineReducers } from '@reduxjs/toolkit';
import noteReducer, { actions as NoteActions } from './notesSlice';

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default combineReducers({
  note: noteReducer
}); 

const actions = { ...NoteActions };
export { actions };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
