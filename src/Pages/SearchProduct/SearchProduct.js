import React, { useContext, useEffect, useState } from "react";
import "./SearchProduct.scss";
import SearchIcon from "@mui/icons-material/Search";
import List from "../../Components/List/List";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../../Context/UserContext";
import { Card } from "@mui/material";
import Filter from "../../Components/Filter/Filter";
import { ArrowRight } from "@mui/icons-material";

function SearchProduct() {
  const {setQuory} = useContext(Context)

  const navigate = useNavigate();
  const search=()=>{
    navigate('/searchPage')
  }

    // const location = useLocation();
    // const catId = useParams().id;
    const [maxPrice, setMaxPrice] = useState(1000);
    // const [sort, setSort] = useState(null);
    const [sorting,setSorting] = useState(false)
    // const fetch = true;
    const { data, setData,quory } = useContext(Context);
    const [sortlist,setSortList] = useState([])
    const [filter,setFilter] = useState(false)
  
    const sorteddata=()=>{
      data.filter(item=>item.newPrice == maxPrice)
    }
  
    const dataOnChange=(e)=>{
      setMaxPrice(e.target.value)
      setSorting(true)
      setSortList(data.filter(item=>item.newPrice < maxPrice))
    }

    const apply = () => {
      setFilter(false)
    }

  
    const sortAsc=()=>{
      setSorting(true)
      setSortList(data.sort((a, b) => a.newPrice - b.newPrice))
    }
  
    const sortDsc=()=>{
      setSorting(true)
      setSortList(data.sort((a, b) => b.newPrice - a.newPrice))
    }
  
    const categorySort=(e)=>{
      setSorting(true)
      setSortList(data.filter(item=>item.category == e.target.value))
    }
  

  return (
    <div className="products">
       <div onClick={()=>setFilter(!filter)} className="filterbtn"><ArrowRight/> Filter</div>
      <div className="left">
        <div className="filterItem">
          <h1>Product Category</h1>
          <div className="inputItem">
            <input type="checkbox" id="1" value="shirt" onChange={(e)=>categorySort(e)}  />
            <label htmlFor="1">Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2"  value="tshirt" onChange={(e)=>categorySort(e)}  />
            <label htmlFor="2">Tshirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value="trousers" onChange={(e)=>categorySort(e)}  />
            <label htmlFor="3">Trousers</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value="top" onChange={(e)=>categorySort(e)}  />
            <label htmlFor="4">Top</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value="saree" onChange={(e)=>categorySort(e)}  />
            <label htmlFor="5">Saree</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value="hat" onChange={(e)=>categorySort(e)}  />
            <label htmlFor="6">Hats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="7" value="shoes" onChange={(e)=>categorySort(e)} />
            <label htmlFor="7">Shoes</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e)=>dataOnChange(e)}
            />
            <span>{maxPrice}</span>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={sortAsc}
              />
              <label htmlFor="asc">Price (Lowest First) </label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={sortDsc}
              />
              <label htmlFor="desc">Price (highest First) </label>
            </div>
          </div>
        </div>
      </div>
      <div className="right-sec">
        <div className="search-section">
        <input placeholder="Search" onChange={(e)=>setQuory(e.target.value)} />
            <div className="searchbtn" onClick={search}>
            <SearchIcon/>
            </div>
        </div>
        {data ? <List sorting={sorting} setSorting={setSorting} sortlist={sortlist}/> : 'No Search Result Found' }
        {/* catId={catId} maxPrice={maxPrice} sort={sort}  */}
        
      </div>
      {filter && <Filter apply={apply} categorySort={categorySort} sortAsc={sortAsc} sortDsc={sortDsc} maxPrice={maxPrice} dataOnChange={dataOnChange} filter={filter} setFilter={setFilter}/>}
    </div>
  );
}

export default SearchProduct;