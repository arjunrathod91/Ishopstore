import React, { useContext, useEffect } from 'react'
import './List.scss'
import Card from '../Card/Card'
import { Context } from '../../Context/UserContext';
import axios from 'axios';
import { useLocation, useParams } from "react-router-dom";

function List({ sorting,sortlist }) {
  const { data, setData,quory,searched,setSearched} = useContext(Context);
  const fetch = true
  const location = useLocation();

  useEffect(() => {
    switch (fetch) {
      case location.pathname === "/children":
        axios
          .get("http://localhost:3004/children")
          .then((details) => setData(details.data))
          .catch((err) => console.log(err));
        break;
      case location.pathname === "/women":
        axios
          .get("http://localhost:3004/women")
          .then((details) => setData(details.data))
          .catch((err) => console.log(err));
        break;
      case location.pathname === "/men":
        axios
          .get("http://localhost:3004/men")
          .then((details) => setData(details.data))
          .catch((err) => console.log(err));
        break;
      case location.pathname === "/searchPage":
          axios
          .get(`http://localhost:3004/featured`)
          .then((details) => setData(details.data.filter((item)=>item.category == quory)))
          .catch((err) => console.log(err));
        break; 
    }
  }, [data])


  return (
    <div className='list'>

      {
        sorting ? sortlist.map((item) => (
          <div><Card item={item} key={item.id} /></div>
        )) : data.map((item) => (
          <div><Card item={item} key={item.id} /></div>
        ))
      }



    </div>
  )
}

export default List
