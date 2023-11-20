import React from 'react';
import { useFormik } from 'formik';
import { EditableTextInput } from '@susemaa/test_component_library';
import { useDispatch } from 'react-redux';
import { actions } from './slices/index';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  interface FormValues {
    body: string;
    title: string;
  }
  const formik = useFormik<FormValues>({
    initialValues: {
      body: '',
      title: '',
    },
    onSubmit: (values) => {
      const { body, title } = values;
      dispatch(actions.add({ body, title, date: new Date()}));
    }
  });
  return (
    <div className="bg-white rounded">
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto mt-10">
      <EditableTextInput
        value={formik.values.body}
        onChange={(value) => formik.setFieldValue('body', value)}
        label="Управлять заметками еще проще!"
      />
      <input
        className="w-full mb-4 mt-4 border border-gray-300 rounded p-2"
        type="text"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Заголовок заметки"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
      Создать заметку
      </button>
    </form>
    </div>
  );
}

export default Form;
