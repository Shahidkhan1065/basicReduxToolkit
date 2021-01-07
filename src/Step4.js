import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { chooseCheese } from './rootSlice';

const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cheese = useSelector((state) => state.cheese);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      cheese,
    },
  });
  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    history.push('/result');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='cheese'>Pick Cheese</label>
        <select id='cheese' name='cheese' ref={register}>
          <option value='no_cheese'>No Cheese</option>
          <option value='yes_cheese'>Yes Cheese</option>
          <option value='salter_cheese'>Salted cheese</option>
          <option value='sweet_cheese'>Sweet cheese</option>
        </select>
      </div>
      <button>Result</button>
    </form>
  );
};

export default Step4;
