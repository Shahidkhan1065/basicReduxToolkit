import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseCrust } from './rootSlice';

const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const crust = useSelector((state) => state.crust);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      crust,
    },
  });
  const onSubmit = (data) => {
    dispatch(chooseCrust(data.crust));
    history.push('/step3');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='crust'>Pick Crust</label>
        <select id='crust' name='crust' ref={register}>
          <option value='classic'>Classic</option>
          <option value='royal'>Royal</option>
          <option value='grand'>Grand</option>
          <option value='upper_grand'>Upper Grand</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step2;
