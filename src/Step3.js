import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseSauce } from './rootSlice';

const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sauce = useSelector((state) => state.sauce);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      sauce,
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseSauce(data.sauce));
    history.push('/step4');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='sauce'>Pick Sauce</label>
        <select id='sauce' name='sauce' ref={register}>
          <option value='no_sauce'>no_sauce</option>
          <option value='namkin_sauce'>namkin sauce</option>
          <option value='khatta_sauce'>Khatta sauce</option>
          <option value='meetha_sauce'>Meetha sauce</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step3;
