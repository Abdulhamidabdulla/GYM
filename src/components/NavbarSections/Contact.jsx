import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact'>
          <h1 className='log'>Ro'yxatdan O'tish</h1>
          <div className="con">
            <form>
              <input type="text" id='user' className='in1' placeholder='E-mail pochtangiz' required />
              <input type="password" id='password' className='in2' placeholder='E-mail pochta kodingiz' required />
              <div className='your'>
              <a href="#" className='forgetpassword'>Ko'dingizni unutdingizmi?</a>
              </div>
              <button>
                <input type="submit" value="Login" id='btn' />
              </button>
              <div className="sign">
                  <a href="#">Yangi akkount yaratish</a>
                </div>
            </form>
          </div>
      </div>
  </div>
  )
}

export default Contact
