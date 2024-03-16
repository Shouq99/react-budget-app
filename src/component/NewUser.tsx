 import React, {ChangeEvent, FormEvent, useState}from 'react';
 import { v4 as uuidv4 } from 'uuid';

 const NewUser = ()=>{

    const [user, setUser] = useState({
     name:'',
     email:'',
    age:''
   });

 const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setUser((prevUser) =>{
        return {...prevUser, [event.target.name ]:event.target.value };
       });
       
 };

 const handleSubmit = (event: FormEvent) =>{
     event.preventDefault();
     console.log(user);
   const NewUser = {id: uuidv4(), ...user};
   console.log(NewUser);
    setUser ( {
        name:'',
        email:'',
       age:''
      });
    };
 

     return (
    
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name here' value={user.name} name='name' onChange={handleChange} required />
                <input type="email" placeholder='email here'value={user.email} name='email' onChange={handleChange}  required />
                <input type="number" placeholder='age here' value={user.age} name='age' onChange={handleChange}  required />
               <button>Create User</button>
           </form>
        
           </div>
    ); };

 export default NewUser;