// import React, {ChangeEvent, FormEvent, useState}from 'react';

// const NewUser = ()=>{

//    const [user, setUser] = useState({
//     name:'',
//     email:'',
//     age:''
//    });

//     // const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
//     //     setName(event.target.value);

//     // };
//     //  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>{
//     //     setEmail(event.target.value);

//     // }; 
//     // const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) =>{
//     //     setAge(event.target.value);

//     // };

// const handleSubmit = (event: FormEvent) =>{
//     event.preventDefault();
//     const newUser = {
//         name:user.name,
//         email:user.email,
//         age: user.age,
//     };
// }

//     return (
    
//         <div>
//             <h2>Create User</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder='name here' value={user.name} onChange={handleNameChange} required />
//                 <input type="email" placeholder='email here'value={user.email}  onChange={handleEmailChange}  required />
//                 <input type="number" placeholder='age here' value={user.age} onChange={handleAgeChange}  required />
//                 <button>Create User</button>
//             </form>
        
//             </div>
//     );
// };

// export default NewUser;