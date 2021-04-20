import React, { useState } from 'react';

const Content = ({ country }) => {
  const [value, setValue] = useState('Press Here');
  return (
    <div className='content'>
      {country !== '' && (
        <article className='content-country'>
          <img src={country.img} alt={country.name} />
          <div className='content-country-details'>
            <h3>{country.name}</h3>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
            <p>
              Language: <span>{country.languages[0].name}</span>
            </p>
          </div>
        </article>
      )}
      <button
        className='content-button'
        onClick={() =>
          setValue(val => (val === 'Press Here' ? 'Clicked' : 'Press Here'))
        }
      >
        {value}
      </button>
    </div>
  );
};

export default Content;
