import React from 'react'
import { useState } from 'react';

export default function Clock() {
    let samaye = new Date().toLocaleTimeString(); 
    let miti = new Date().toLocaleDateString();

    const [Time , setTime] = useState(samaye);
    const [Tarik , setTarik]= useState(miti);

    const nayaTime = () => {
        samaye = new Date().toLocaleTimeString(); 
        setTime(samaye);
    }


    const nayaTarik = () => {
      miti = new Date().toLocaleDateString();
      setTarik(miti);
    }


    setInterval(nayaTime , 1000);

    setInterval(nayaTarik , 100000);
  return (
    <div className='min-h-screen bg-[url(/src/assets/space.jpg)] bg-cover flex items-center justify-center'>
  <div className='relative'>
    <div className='absolute top-[-50%] left-[-50%] w-[200%] h-[200%] backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full'></div>
    <div className='relative flex-col flex items-center justify-center text-white font-bold'>
      <div className='text-4xl'>Time</div>
      <div className='text-8xl '>{samaye}</div>
      <div className='text-4xl pt-4'>Date : {miti}</div>
    </div>
  </div>
</div>




  )
}



//this is not responsive 
