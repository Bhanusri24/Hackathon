import axios from 'axios';
import React,{useState} from 'react'

const Eventregister = () => {

  const [data,setData] = useState({
    Companyname : "",
    email : "",
    mobileno : "",
  })

  const {Companyname,email,mobileno}=data;

  const changehandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const submithandler = e =>{
    e.preventDefault()
    axios.post("https://localhost:4000/api/v2/registerorg",data).then(res=>alert(res.data))
  }
  return (
    <div>
      <center>
        <form onSubmit={submithandler}>
          <h3>Company name<input type="text" name="{Companyname" value={Companyname} onChange={changehandler}/><br/></h3>
          <h3>Email<input type="email" name="email" value={email} onChange={changehandler}/><br/></h3>
          <h3>Mobile number<input type="phonenumber" name="mobileno" value={mobileno} onChange={changehandler}/><br/></h3>

          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}

export default Eventregister