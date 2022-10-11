import "./Create.css"
import {useState} from "react"


const Create = () => {
    const[firstName,setfirstName] = useState('');
    const[lastName,setlastName] = useState('');
    const[Eduction,setEduction] = useState('');
    const[Email,setEmail] = useState('');
    const[phone,setphone] = useState('');
    const[Experiance,setExperiance] = useState('');
    const[Address,setAddress] = useState('');
    const btn = document.getElementById('btn')
    const handleSubmit =(e) =>{
         e.preventDefault();
         const Submit ={firstName,lastName,Eduction,Email,phone,Experiance,Address};
         console.log(Submit);
         setfirstName('');
         setlastName('');
         setEduction('');
         setEmail('');
         setphone('');
         setExperiance('');
         setAddress('');

    }

    return(
      <div className="create">
        <h2>Hello Everyone </h2>
        <form onSubmit={handleSubmit}>
            <label> firstName:</label>
            <input type= "text" required 
            value={firstName}
            onChange={(e)=> setfirstName(e.target.value)}>
             </input>
            <label> lastName:</label> 
            <input type= "text" required 
            value={lastName}
            onChange={(e)=> setlastName(e.target.value)}/> 
            <label> Eduction:</label>  
            <input type= "text" required 
            value={Eduction}
            onChange={(e)=> setEduction(e.target.value)}/> 
            <label> Email:</label> 
            <input type= "email" required 
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}/> 
            <label> phone:</label>  
            <input type= "tel" required 
            value={phone}
            onChange={(e)=> setphone(e.target.value)}/> 
            <label> Experiance:</label>  
            <input type= "text" required 
            value={Experiance}
            onChange={(e)=> setExperiance(e.target.value)}/> 
            <label> Address:</label>  
            <input type= "text" required 
            value={Address}
            onChange={(e)=> setAddress(e.target.value)}/> 
            <button type="submit" onClick ={handleSubmit} >Submit</button>
        </form>
      </div>
    )
}
export default Create;