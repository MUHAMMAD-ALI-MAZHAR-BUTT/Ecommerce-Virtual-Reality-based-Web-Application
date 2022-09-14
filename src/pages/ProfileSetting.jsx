import React, { useState } from 'react'
import Joi from 'joi';

export default function ProfileSetting() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const Schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password: Joi.string().min(6).max(20).required(),
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      phone: phone,
      password: password,
    }
    // const result=Joi.validate(user,Schema);
    const result = Schema.validate(user);
    if(result.error){

      setError(result.error.details[0].message);
    }
    else{
      setError('');
      // submit form 
    }

  }

  return (
    <div className='title profileSetting'>
      <h3>Settings</h3>
      {error && <div class="alert alert-danger" role="alert">
        {error}
      </div>}


      <div className="formSection mt-3">
        <form action="" className="shadow">
          {/* <div className="userImage">
            <img src="../Images/pngwing.com.png" alt="" />
          </div> */}
          <div className="userData">
            <h3 className='text-center'>Edit Profile</h3>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username' className='form-control' value={username} onChange={e => setUsername(e.target.value)} />
            <label htmlFor="email" className='mt-2'>Email</label>
            <input type="email" name='email' id='email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="phone" className='mt-2'>Phone</label>
            <input type="text" name='phone' id='phone' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor="password" className='mt-2'>Password</label>
            <input type="password" name='password' id='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="formButtons mt-3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className="btn btn-secondary">Cancel</div>
            <div className="btn btn-primary ms-3" onClick={handleSubmit}>Update</div>
          </div>

        </form>
      </div>
    </div>
  )
}

