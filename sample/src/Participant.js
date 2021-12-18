import axios from 'axios';
import React,{useState,useEffect} from 'react'

const Participant = () => {

  const [data,setData] = useState({
    Name : "",
    email : "",
    mobileno : "",
    companyname : "",
  })
 const [events, setEvents] = useState([])
  const {Name,email,mobileno,companyname}=data;

  const changehandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const submithandler = e =>{
    e.preventDefault()
    axios.post("https://localhost:4000/login",data).then(
        res => console.log(res.data)
    )
  }
  useEffect(()=>{
    axios.get("https://localhost:4000/api/v2/getregisterorg").then(
      res=>setEvents(res.data)
    )
  })
  return (
    <div>
      <center>
        <form onSubmit={submithandler}>
          <h3>Name<input type="text" name="Name" value={Name} onChange={changehandler}/><br/></h3>
          <h3>Email<input type="email" name="email" value={email} onChange={changehandler}/><br/></h3>
          <h3>Mobile number<input type="phonenumber" name="mobileno" value={mobileno} onChange={changehandler}/><br/></h3>
          <h3>Company name<input type="text" name="companyname" value={companyname} onChange={changehandler}/><br/> </h3>
          <input type="submit" name="submit" />
        </form>
        {events.map(org=>
          <div>
            <h2>{org.name}</h2>
          </div>)}
      </center>
    </div>
  )
}

export default Participant