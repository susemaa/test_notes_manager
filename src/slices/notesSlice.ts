import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoteProps } from '@susemaa/test_component_library/dist/types';
import { createUniqueIdGenerator } from '../utils';

const idGenerator = createUniqueIdGenerator();

interface NotesWithId {
  note: NoteProps;
  id: number;
}

interface NotesState {
  notes: Array<NotesWithId>
}

const initialState: NotesState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<NoteProps>) => {
      const noteWithId = { note: action.payload, id: idGenerator() };
      state.notes.push(noteWithId);
      console.log(state);
    },
    remove: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.notes = state.notes.filter((note) => note.id !== idToRemove);
    },
  },
});

const actions = {
  ...noteSlice.actions,
};

export { actions };
export default noteSlice.reducer;
