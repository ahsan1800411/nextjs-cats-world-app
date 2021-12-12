import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav/Nav';

function Cat() {
  const [cat, setCat] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchCat = async () => {
    const { data } = await axios(`/api/cats/${id}`);
    setCat(data);
  };
  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <>
      <Nav />
      <div className='container mt-5'>
        {cat && (
          <div style={{ display: 'flex' }}>
            <img src={cat.image.url} alt={cat.image.alt} />
            <h1 className='mx-5'>{cat.name}</h1>
            <p>{cat.description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cat;
