
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { random } from '../../store/reducers/randomReducer';

export default function Ex02() {
  const dispatch = useDispatch();
  const numbers = useSelector((state:any) => state.random.numbers);

  const handleButtonClick = () => {
    dispatch(random());
  };

  return (
    <div>
      <div>Ex02</div>
      <p>List Number: [{numbers.join(', ')}]</p>
      <button onClick={handleButtonClick}>Random Number</button>
    </div>
  );
}
