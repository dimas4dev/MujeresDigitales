import React from 'react';
import { useEffect } from 'react';

const BoilingVerdict = ({ celsius }) => {


  useEffect(()=>{
    const promises = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    
  },[])	


  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

export default BoilingVerdict;
