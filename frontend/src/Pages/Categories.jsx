import React ,{useState,useEffect} from 'react'
import animalsdata  from "../static/files/pets_catogery.json"
import Category from '../Components/categroy/category'
import sampleimage from '../static/images/Alpaca.png'
import "./Categories.css"

export default function Categories() {
    const [data,setdata] = useState("")
    useEffect(() => {
        setdata(animalsdata)
    },[])
    console.log(data)
    
  return (
    <div className="categories">
        {data ? Object.entries(data).map(([key,values]) => {
            return <Category name={key} values={values} image={sampleimage}/>
        }) :() => {return(<p>No data provided</p>)}}
    </div>
  )
}
