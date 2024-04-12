import React ,{useState,useEffect} from 'react'
import "./Search.css"
import Products from '../Components/Products/Products'
import { useParams } from 'react-router-dom'

export default function Search() {
    const [minprice,setminprice]  = useState(0)
    const [maxprice,setmaxprice]  = useState(0)
    const [availability,setavailability]  = useState(1)
    const [product , setproduct]  = useState(false)
    const params = useParams()
    
    useEffect(() => {
        //This are the defualt values we use when we are searching for the products
        setminprice(0);
        setmaxprice(10000);
        setavailability(1)
    },[])

    const onminPricechange = (change) =>{
        // console.log(change.target.value)
        setminprice(parseInt(change.target.value))
    }
    const onmaxPricechange = (change) =>{
        // console.log(change.target.value)
        setmaxprice(parseInt(change.target.value))
    }

    const checkavialability =(event) =>{
        if (event.target.checked){
            setavailability(0)
        }else{
            setavailability(1)
        }
        console.log(availability)
    }

    const getproducts = () => {
        if (product){
            setproduct(!product)
        }else{
            setproduct(!product)
        }
    }
    

  return (
    <div className='serachcontent'>

        <div className="leftcontainer">
            <div className="filterscontent">
                <h2 className='filterboxtext'>FilterBox</h2> 
                <hr></hr>
                <div className="pricerange">
                    <h3>Min price</h3>
                    <input type="range" name="minpriceselector" onChange={onminPricechange} id="" min={100} max={100000} step={500}/>
                    <label  for="minpriceselector">{minprice}</label>
                    <h3>Max price</h3>
                    <input type="range" name="maxpriceselector" onChange={onmaxPricechange} id="" min={minprice} max={100000} step={500}/>
                    <label  for="maxpriceselector">{maxprice}</label>
                </div>
                <hr></hr>
                <div className="color"> color if possible</div>
                <div className="availability">
                    <input type="checkbox" name="availability" id="" onChange={checkavialability} />
                </div>
                <div className="discounts">discounts if possible</div>
                <div className="newarrivels">if new arriavals its shown here</div>
                <button className="apply" onClick={() => {getproducts()}}>Apply</button>
            </div>
        </div>

        <div className="rightcontainer">
            <div className="itemsnumber">This is item number display x/xx</div>
            <div className="sortingcontent">
                <div className="pricedropdown">
                    <div className="lowtohigh"></div>
                    <div className="hightolow"></div>
                    <div className="popularity"></div>
                </div>
            </div>
            <div className="maincontent">
                <div className="items">
                {product ? <Products minprice={minprice} maxprice= {!maxprice? 10000 : maxprice} pageno={2}/>:(<h2>No products set</h2>)}
                </div>
            </div>
            <div className="pages"></div>
        </div>
    </div>
  )
}
