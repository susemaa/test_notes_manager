import React from 'react';
import { Note } from '@susemaa/test_component_library';
import Masonry from 'react-responsive-masonry';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, actions } from './slices/index';
import FormContainer from './FormContainer';

function App() {
  const { notes } = useSelector((s: RootState) => s.note);
  const dispatch = useDispatch();
  const onRemove = (id: number) => () => dispatch(actions.remove(id));
  return (
    <div className="overflow-y-auto">
      <div className="justify-center w-screen">
        <FormContainer />
      </div>
      <div className="container mx-auto px-4">
        <Masonry columnsCount={3}>
          {notes.map(({ note, id}) => {
            const { body, title, date } = note;
            return (
              <Note body={body} title={title} date={date} key={id} onRemove={onRemove(id)}/>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}

export default App;
