import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Course() {
    const [book, setBook]=useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook()
    }, []);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you{""} 
                <span  className='text-pink-500'> Here :)</span>
            </h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum incidunt cum libero iste excepturi laudantium modi porro perferendis ratione! Eligendi totam neque iusto doloremque nihil natus doloribus sunt ullam ipsam earum quidem commodi eveniet nesciunt odio, corporis voluptas soluta?</p>
            <Link to='/'>
            <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white cursor-pointer hover:scale-105 duration-200 mt-7'> Back</button>
            </Link>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
