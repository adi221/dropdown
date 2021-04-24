import React, { useState } from 'react';

const Form = ({ isShow }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = e => {
    e.preventDefault();
  };

  if (!isShow) return null;

  return (
    <form onSubmit={formHandler} className='form'>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          placeholder='Enter name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type='submit' disabled={!name || !password}>
        Login
      </button>
    </form>
  );
};

export default Form;
