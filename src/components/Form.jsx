import React, { useState } from "react";


function SignUp({
    name,
    setName,
    email,
    setEmail,
    company,
    setCompany
}){
   return( <>
    <input 
      type="text" 
      className="border"
      name="txtName" 
     // id="txtName"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      
      <input 
        type="text" 
        className="border"
        name="txtEmail" 
       // id="txtEmail"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />

      <input 
        type="text" 
        className="border"
        name="txtEmail" 
       // id="txtEmail"
        value={company.url}
        onChange={(e)=> setCompany(prev => ({
          ...prev,
          url: e.target.value
        }))}
      />
  </>
   )
}

export default function Form() {
    const [name, setName] = useState('Fadheelah')
    const [email, setEmail] = useState('fad@gmail.com')
const [company, setCompany] =useState({
  cName:"FadTech",
  url:"showdata.com"
})

  return (

   <>
   <p>name: {name}</p>
   <p>email: {email}</p>
   <p>email: {company.url}</p>
   
   <SignUp  
   {...{
    name,
    setName,
    email,
    setEmail,
    company,
    setCompany
   }}
   />

</>
  );
}
