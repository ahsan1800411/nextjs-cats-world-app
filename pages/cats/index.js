import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';

function index() {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const { data } = await axios('/api/cats');

    setCats(data);
  };
  useEffect(() => {
    fetchCats();
  }, []);
  return (
    <>
      <Nav />
      <div className='container mt-5'>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {cats.map((cat) => (
            <Card
              name={cat.name}
              image={cat.image}
              id={cat.id}
              phone={cat.phone}
              email={cat.email}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default index;
