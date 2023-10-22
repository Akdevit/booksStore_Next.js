import React from 'react'
import "../css/Login.css"
import Image from 'next/image'
import LogInImg from "../Images/20602853_6300959.jpg"
import googleImg from "../Images/google.png"
import FacebookImg from "../Images/facebook.png"
import LinkedinImg from "../Images/linkedin.png"
const page = () => {
  return (
    <>
     <div className='login-container'>

           <div className='input-logo'>
                <h1 className='name-login'>login To Your Account</h1>
                <div className='logos'>
                    <div className='logo-g'><Image src={googleImg} alt='logo.png' className='logo-image'/></div>
                    <div className='logo-g'><Image src={FacebookImg} alt='logo.png' className='logo-image'/></div>
                    <div className='logo-g'><Image src={LinkedinImg} alt='logo.png' className='logo-image'/></div>
                </div>
                <div className='inputs-group'>
                  <input type='email' className='inpute-n' placeholder='Enter Email'/>
                  <input type='password' className='inpute-n' placeholder='Enter Password'/>
                  <button className='submit-log'>Submit</button>
                </div>
           </div>

           <div className='login-image'>
            <Image src={LogInImg} alt='login-illustration.png' className='slogin-image'/>
           </div>

     </div>
    </>
  )
}

export default page
