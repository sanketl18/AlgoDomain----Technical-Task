import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import CustomerAuthService from '../Services/CustomerAuthService';
import "../Style/Login.css";

function Customer() {
 
    const[data,setData]=useState({
        username:"",
        password:""
    })
  
    const navigate =  useNavigate();
  
    const handleLogin = async  (e)=>{
        e.preventDefault();
        try{
            await CustomerAuthService.login(data.username,data.password).then(
                ()=>{
                    navigate("/Customerhome");
                    window.location.reload();
                    
                },
                (error)=>{
                    console.log(error);
                    alert("incorrect credentials");
                }
            )
        }
        catch(err){
            console.log(err);
        }
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
       
    }
  
    return (
    <React.Fragment>
        <div className='loginform'>
        <div id="bg"></div>
            <form onSubmit={handleLogin}>
            <h1 className=" text-center " >Log in</h1>
                <div className="form-field">
      <input  onChange={(e)=>handle(e)} id="username" value={data.username} placeholder='username' type="text" required/>
            </div>
  
            <div className="form-field">
      <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" placeholder="Password" required/>                         </div>
    
      <div className="form-field">
      <button className="btn" type="submit">Log in</button>
    </div>
    <div className="text-center">
        <h3><Link to={"/customer/reg"} className="regnot"> Not a user? Register</Link></h3>
    
     </div>
               
            </form>
        </div>
  
       
        
    </React.Fragment>
  )
  }
  
  export default Customer;