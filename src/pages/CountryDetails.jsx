import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryIndData } from '../api/postApi';
import Loader from '../components/UI/Loader';

const CountryDetails = () => {
     const [isPending, startTransition] = useTransition();
      const [countries, setCountries] = useState([]);
    const params = useParams();
    useEffect(() => {
        startTransition(async () => {
          const res = await getCountryIndData(params.id);
          setCountries(res.data);
        });
      }, []);
    
      if (isPending) return <Loader />;
  return (
    <div>
        
    </div>
  )
}

export default CountryDetails
