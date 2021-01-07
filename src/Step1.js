import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { chooseBase } from './rootSlice';

const Step1 = () => {
  const dispatch = useDispatch();
  const base = useSelector((state) => state.base);
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      base,
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseBase(data.base));
    history.push('./step2');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='base'>Pick Base</label>
        <select id='base' name='base' ref={register}>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step1;
