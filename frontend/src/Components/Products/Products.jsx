import React,{useEffect, useState} from 'react'
import axios from 'axios'
import "./Products.css"
import Spinner from '../spinner/spinner'

export default function Products(props) {
    const [products ,setproducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        const getpetsdata = async() =>{
            setloading(true)
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const response = await axios.get(`http://localhost:4000/api/pets/getpets?minprice=${props.minprice}&maxprice=${props.maxprice}&page=${props.pageno}`)
            const data = response.data
            setproducts(data['petsdata'])
            console.log(products)
            setloading(false)
        }
        getpetsdata()
    },[setproducts,props.minprice,props.maxprice,props.pageno,setloading])

  return (
    <div className='productscontainer'>
        { (products).length > 0 && !loading ?  (products.map((pets) =>(
            <div key={pets._id} className="petsdata">
                <div className="imgcontainer">
                    <img className='petimage' src={pets.imagelocation[0] } />
                </div>
                <div className="petinfoandcart">
                    <div className="petdatacontainer">
                        <h3 className='petfullname'>{pets.petname}</h3>
                        {/* <hr /> */}
                        <p>Price: {pets.price}</p>
                        <p>Age: {pets.age}</p>
1                   </div>
                    <div className="cartandwhislist">
                        <button className="addtocart showpets">Add to cart</button>
                        <i class="fa-regular fa-heart addtowishlist"></i>
                    </div>
                </div>
            </div>
        ))) :  (<Spinner fontsize="100px" color="blue"/>) }
    </div>
  )
}
