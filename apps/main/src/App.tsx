
import React from 'react';
import image from '@/assets/image.png'

export default function App(){
    return (
        <div>
            <h2 className='font-bold text-2xl text-blue-800'>App</h2>
            <img src={image} alt='image' />
        </div>
    )
}