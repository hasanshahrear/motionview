import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const router = useRouter();


  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push("/profile")
    }
  })

  const handleClick = ()=> {
    axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    })
    .then(result => {
      setToken(result.data.token);
      localStorage.setItem('token', token);
      localStorage.setItem('name', email);
      token ? router.push("/checkout") : router.push("/login")
    })
    .catch(error => {
      console.log(error)
    })

  }
  
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="mx-auto w-[300px] sm:w-[400px]  bg-blue-100 shadow-lg my-10 p-5 sm:p-20">
          <h2 className="text-xl text-center mb-10 uppercase">Login</h2>
            <p>
            eve.holt@reqres.in <br/>
            cityslicka
            </p>
            <input type="email" onChange={handleEmail} value={email} className="w-full h-[48px] mb-10 p-5" />
            <input type="password" onChange={handlePassword} value={password} className="w-full h-[48px] p-5 mb-10" />
            <button onClick={() => {handleClick()}}  className="mx-auto px-7 py-2 bg-orange-500 text-white">Submit</button>
          
      </div>
    </div>
  )
}

export default login