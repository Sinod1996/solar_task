import React from 'react'

export default function Form() {

  const newDate = new Date().getFullYear();

  return (
    <>
  <form>
      <div className='flex'>
        <div>  
             <label htmlFor="first_name">First Name <span>&#42;</span></label> <br/>
            <input type="text" name='first_name'  />
       </div>
        <div>
            <label htmlFor="last_name">Last Name <span>&#42;</span></label> <br/>
           <input type="text" name='last_name'/> 
        </div>
      </div>

       <div className='flex'>
        <div>  
             <label htmlFor="company">Company<span>&#42;</span></label> <br/>
            <input type="text" name='company'  />
       </div>
        <div>
            <label htmlFor="address">Address<span>&#42;</span></label> <br/>
           <input type="text" name='address'/> 
        </div>
      </div>

      <div className='flex'>
        <div>  
             <label htmlFor="phone">Phone<span>&#42;</span></label> <br/>
            <input type="phone" name='phone'  />
       </div>
        <div>
            <label htmlFor="email">Email<span>&#42;</span></label> <br/>
           <input type="email" name='email'/> 
        </div>
      </div>
      <div className='flex'>
        <div>  
             <label htmlFor="url">Website URL</label> <br/>
            <input type="text" name='url'  />
       </div>
        <div>
            <label htmlFor="number">Number of projects<span>&#42;</span></label> <br/>
           <input type="text" name='number'/> 
        </div>
      </div>

      <div className='flex'>
        <div>
            <label htmlFor="message">Message/Comment</label> <br/>
           <textarea name="message" id="textarea" ></textarea>
        </div>
      </div>

      <button>Submit information</button>
</form>


    <div className='footer_date'>
        <p>©{newDate}, SolarTasks LLC, All Rights Reserved</p>
    </div>
</>
  )
}
