import React from 'react'
import "../css/Homesect.css"
import Image from 'next/image'
import Booksimage from "../Images/9650640_7788__1_-removebg-preview.png"
const Homesect = () => {
  return (
    <>
       <div className='section-home'>
             <div className='sec-h'>
                   <div className='h-text'>
                     <h1 className='text-h1'>A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives </h1>
                     <p className='text-p'>E-books are the modern ink on digital pages, where stories transcend physical boundaries. Theyre libraries in our pockets, windows to distant worlds, and a testament to literatures evolution in the digital age.</p>
                   </div>
                   <div className='h-image'>
                         <Image
                         src={Booksimage}
                         alt='image.jpg'
                         className='image-books'
                         />
                   </div>
             </div>
       </div>
    </>
  )
}

export default Homesect
