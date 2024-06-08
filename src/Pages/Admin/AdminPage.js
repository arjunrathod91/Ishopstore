import React, { useContext, useState } from 'react'
import './Admin.scss'
import { Context } from '../../Context/UserContext'
import { Delete, Edit } from '@mui/icons-material';

function AdminPage() {
  const { defaultUsername } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [arrayOfData, setArrayOfData] = useState([])

  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [title, setTitle] = useState('');
  const [oldPrice, setOldPrice] = useState();
  const [newPrice, setNewPrice] = useState();
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState('');
  const [quality, setQuality] = useState('');
  const [type, setType] = useState('')
  const [id,setId] = useState(0);

  const data = [
    {
      "id": 1,
      "img1": "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/f/7/g/xxl-pink-1-otus-original-imagjg3gbywghznh.jpeg?q=70&crop=false",
      "img2": "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/0/m/s/xxl-pink-1-otus-original-imagjg3g2uj2ez4p.jpeg?q=70&crop=false",
      "title": "Men Slim Fit Striped Spread Collar Casual Shirt",
      "oldPrice": 800,
      "newPrice": 379,
      "desc": "The slim fit silhouette offers a sleek and tailored look, while the striped pattern adds a touch of refinement to your ensemble. Featuring a spread collar design, it exudes a polished vibe suitable for various occasions, from casual gatherings to semi-formal events. Made from high-quality, breathable fabric, this shirt ensures comfort and ease of movement throughout the day. ",
      "tags": "comfort,men shirt, style, cool",
      "category": "shirt",
      "quality": "U TURN ",
      "type": "men"
    },
    {
      "id": 2,
      "img1": "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/x/b/s/xl-t4th-293-boxedshirt-white-lewel-original-imagk4nevabjq7jh.jpeg?q=70&crop=false",
      "img2": "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/j/b/xl-t4th-293-boxedshirt-white-lewel-original-imagk4ne5d7zzch9.jpeg?q=70&crop=false",
      "title": "Men Checkered Polo Neck Cotton Blend White, Black T-Shirt",
      "oldPrice": 800,
      "newPrice": 350,
      "desc": "Crafted from a lycra blend fabric, the VeBNoR Men’s Regular Shirt offers enhanced comfort levels. Known for its stretchability, the fabric allows this shirt to conform to your body's shape while still providing freedom of movement.",
      "tags": "Cosual,Silk,Polo",
      "category": "shirt",
      "quality": "LEWEL",
      "type": "men"
    },
    {
      "id": 3,
      "img1": "https://rukminim2.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=70&crop=false",
      "img2": "https://rukminim2.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7c68n7vdz.jpeg?q=70&crop=false",
      "title": "Men Slim Fit Solid Slim Collar Casual Shirt",
      "oldPrice": 1000,
      "newPrice": 390,
      "desc": "Crafted from a lycra blend fabric, the VeBNoR Men’s Regular Shirt offers enhanced comfort levels. Known for its stretchability, the fabric allows this shirt to conform to your body's shape while still providing freedom of movement.",
      "tags": "Cosual,Printed,Cotton",
      "category": "shirt",
      "quality": "Dennis Lingo",
      "type": "men"
    }
  ]
  const submit = () => {
    setArrayOfData([...arrayOfData, [{
      "id":{id},
      "img1": { img1 },
      "img2": { img2 },
      "title": { title },
      "oldPrice": { oldPrice },
      "newPrice": { newPrice },
      "desc": { desc },
      "tags": { tags },
      "category": { category },
      "quality": { quality },
      "type": { type }
    }]])
    setId(id+1);
    console.log(arrayOfData)
  }


  const deleteItem = (id) => {
    const updatedItems = arrayOfData.filter(item => item.id !== id);
    setArrayOfData(updatedItems);
};

  return (
    <div className='admin-page-change'>
      <div className='admin-page-sidebar'>
        <div className=''>Hello {defaultUsername},</div>
        <div className='item' onClick={''}>Children</div>
        <div className='item' onClick={''}>Men</div>
        <div className='item' onClick={''}>Women</div>
      </div>
      <div className='admin-page-content'>
        <div className='data-nav'>
          <button className='add-item' onClick={() => setOpen(!open)}>Add Item</button>
        </div>
        <div className='data-block'>
          {arrayOfData.map((item) => (
            <div className='data-box'>
                <div className='b-1'>
                  <img src={item.img1}/>
                </div>
                <div className='b-2'>
                  <p>image2:{item.img2}</p>
                  <p>title:{item.title}</p>
                  <p>desc:{item.desc}</p>
                  <p>oldPrice:{item.oldPrice}</p>
                  <p>newPrice:{item.newPrice}</p>
                  <p>category:{item.category}</p>
                  <p>brand:{item.brand}</p>
                  <p>tags:{item.tags}</p>
                  <p>type:{item.type}</p>
                </div>
              <div onClick={() => deleteItem(item.id)} className='remove'>
                <Delete/>
              </div>
              <div onClick={() => setOpen(!open)} className='edit'>
                <Edit/>
              </div>
            </div>
          ))}
        </div>
        <div className='data-entry' style={{ display: `${open ? 'flex' : 'none'}` }}>
          <div className='flex-item'>
            <span>Image 1</span>
            <input onChange={(e) => setImg1(e.target.value)} />
          </div>
          <div className='flex-item'>
            <span>Image 2</span>
            <input onChange={(e) => setImg2(e.target.value)} />
          </div>
          <div className='flex-item'>
            <span>Title</span>
            <input onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='flex-item'>
            <span>Description</span>
            <input onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className='flex-price'>
            <div className='flex-item'>
              <span>Old Price</span>
              <input onChange={(e) => setOldPrice(e.target.value)} />
            </div>
            <div className='flex-item'>
              <span>New Price</span>
              <input onChange={(e) => setNewPrice(e.target.value)} />
            </div>
          </div>
          <div className='flex-item'>
            <span>Brand</span>
            <input onChange={(e) => setQuality(e.target.value)} />
          </div>
          <div className='flex-item'>
            <span>Category</span>
            <input onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className='flex-item'>
            <span >Tags</span>
            <input onChange={(e) => setTags(e.target.value)} />
          </div>
          <div className='flex-item'>
            <span >Type</span>
            <input onChange={(e) => setType(e.target.value)} />
          </div>
          <div className='flex-button'>
            <button onClick={() => setOpen(!open)} className='cancel'>Cancel</button>
            <button className='submit' onClick={submit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
