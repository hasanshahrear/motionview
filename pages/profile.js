import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');

  useEffect(()=>{
    setLogin(localStorage.getItem('token'))
    setEmail(localStorage.getItem('name'))
   
  },[])

  if(login == null){
    router.push('/login');
  }
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="mx-auto w-[300px] sm:w-[400px]  bg-blue-100 shadow-lg my-10 p-5 sm:p-20">
          <h2 className="text-xl text-center mb-10 uppercase">Profile</h2>
              {email}
      </div>
    </div>
  )
}

export default Profile