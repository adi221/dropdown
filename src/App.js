import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState({});
  const [content, setContent] = useState('');

  const fetchCountries = async url => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setRegionsAndCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setRegionsAndCountries = data => {
    const regions = [...new Set(data.map(country => country.region))];
    const countriesOfRegions = {};
    for (let i = 0; i < regions.length; i++) {
      let region = regions[i];
      if (region === '') continue;
      countriesOfRegions[region] = [];
    }
    data.forEach(country => {
      const { region, name } = country;
      countriesOfRegions[region] && countriesOfRegions[region].push(name);
    });
    setCountries(countriesOfRegions);
  };

  useEffect(() => fetchCountries('https://restcountries.eu/rest/v2/all'), []);

  const setNewContent = countryName => {
    const country = data.find(country => country.name === countryName);
    const { name, region, capital, flag: img, languages } = country;
    setContent({ name, region, capital, img, languages });
  };

  return (
    <>
      <Navbar />
      <main className='middle'>
        <Sidebar
          countries={countries}
          setNewContent={name => setNewContent(name)}
        />
        <Content country={content} />
      </main>
    </>
  );
}

export default App;
