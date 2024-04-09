import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function LoginorProfile() {
  const [Login, setLogin] = useState(1)
  const [Page, setPage] = useState("")
  const [name, setname] = useState("")
  useEffect(()=>{
  if (Login){
    setPage("/profile")
    setname("profile")
  }else{
    setPage("/login")
    setname('Login')
  }
  },[])
  return (
    <div>
      <Link to={Page}>{name} </Link>
    </div>
  )
}
