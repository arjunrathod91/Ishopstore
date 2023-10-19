import React from 'react'
import './List.scss'
import Card from '../Card/Card'

function List() {

    const fakeDate = [
        {
            id:1,
            img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/i/a/z/4xl-white-vtexx-original-imagnzecssjs3y9g.jpeg?q=70",
            img2:"https://rukminim2.flixcart.com/image/832/832/kwzap3k0/shirt/5/j/a/l-lstr-white-p-v-creations-original-imag9jgg6xtz4yg4.jpeg?q=70",

            title:"Men Regular Fit Solid Cut Collar Formal Shirt",
            oldPrice:"$190",
            newPrice:"$150",

        },
        {
            id:2,
            img1:"https://rukminim2.flixcart.com/image/832/832/l1whaq80/jean/l/b/p/30-ljew13085-stonewash-pluss-original-imagdczyhzqttg3m.jpeg?q=70",
            img2:"https://rukminim2.flixcart.com/image/832/832/l1whaq80/jean/e/m/z/30-ljew13085-stonewash-pluss-original-imagdczyzxpdjrym.jpeg?q=70",
            title:"Women Regular Mid Rise Blue Jeans",
            oldPrice:"$230",
            newPrice:"$170",
        },
        {
            id:3,
            img1:"https://rukminim2.flixcart.com/image/832/832/kxxl9jk0/sweatshirt/j/h/1/-original-imagaa46vrufedrh.jpeg?q=70",
            img2:"https://rukminim2.flixcart.com/image/832/832/kxxl9jk0/sweatshirt/o/t/r/-original-imagaa46zyfuwgge.jpeg?q=70",
            title:"Men Full Sleeve Solid Hooded Sweatshirt",
            oldPrice:"$400",
            newPrice:"$230",
        },
        {
            id:4,
            img1:"https://rukminim2.flixcart.com/image/832/832/kr9jafk0/kurta/p/7/0/3xl-kr499a-metro-fashion-original-imag537e2yhyxczt.jpeg?q=70",
            img2:"https://rukminim2.flixcart.com/image/832/832/kr9jafk0/kurta/e/w/u/m-kr499b-metro-fashion-original-imag537e9whwftd7.jpeg?q=70",
            title:"Women Striped Pure Cotton Straight Kurta",
            oldPrice:"$100",
            newPrice:"$99",
        }]

  return (
    <div className='list'>
        {fakeDate.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}

      
    </div>
  )
}

export default List
