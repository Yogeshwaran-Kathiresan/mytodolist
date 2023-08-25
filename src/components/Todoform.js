import React, { useEffect, useRef, useState } from 'react'

function Todoform(props) {
    const [title, setTitle] = useState('');
    const [est, setEst] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    const handleTitle = e => {
        setTitle(e.target.value);
    };

    const handleEstimation = e => {
        setEst(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: title,
            est: est
        });
        setTitle('');
        setEst('');
    };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <h2 className='form-head'>ADD TODO</h2>
      <input 
        placeholder='Title'
        name='text'
        className='form-input'
        onChange={handleTitle}
        value={title}
        ref={inputRef}
        autoComplete='off'
      />
      <input
        placeholder='Estimated Time(hrs)'
        name='number'
        className='form-input'
        onChange={handleEstimation}
        value={est}
        autoComplete='off'
      />
      <button onClick={handleSubmit} className='submit-button form-input'> Add </button>
    </form>
  )
}

export default Todoform;