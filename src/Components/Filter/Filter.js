import React from 'react'
import './FIlter.scss'
import { ArrowRight } from '@mui/icons-material'

function Filter({ apply, sortAsc, categorySort, sortDsc, maxPrice, dataOnChange}) {
    return (
        <div className="leftsection">
            <div className="filterItem">
                <h2>Product Category</h2>
                <div className="inputItem">
                    <input type="checkbox" id="1" value="shirt" name='category' onChange={(e) => categorySort(e)} />
                    <label htmlFor="1">Shirts</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="2" value="tshirt" name='category' onChange={(e) => categorySort(e)} />
                    <label htmlFor="2">Tshirts</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="3" value="trouser" name='category' onChange={(e) => categorySort(e)} />
                    <label htmlFor="3">Trousers</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="4" value="top" name='category' onChange={(e) => categorySort(e)} />
                    <label htmlFor="4">Top</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="5" value="saree" name='category' onChange={(e) => categorySort(e)} />
                    <label htmlFor="5">Saree</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="6" value="hat" name='category' onChange={(e) => categorySort(e)} />
                    <label htmlFor="6">Hats</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="7" value="shoes" name='category' onChange={(e) => categorySort(e)} />
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
                        onChange={(e) => dataOnChange(e)}
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
            {/* <button className="apply" onClick={apply}>Apply</button> */}
        </div>
    )
}

export default Filter
