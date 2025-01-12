import React from 'react'

const Services = () => {
  return (
    <div>
    <h1 className='ser'>Bizning Servislar:</h1>
    <div className='card'>
      <div className='body'>
        <h2 className='title'>Sportzal</h2>
        <p className='text text-wrap' style={{width:"20rem"}}>Sportzal servisi - siz bu servis bilan o'zingizga yoqgan sportzalni tanlab bemaolo bizning ta'rifmizdan foydalanib mashqlarni amalga oshirishingiz mumkin!</p>
        <button className='benefit'>Foydalanish</button>
      </div>
    </div>
    <div className='card1'>
      <div className='body'>
        <h2 className='title1'>UY</h2>
        <p className='text text-wrap' style={{width:"20rem"}}>UY servisi - ya'ni siz bu servisda uyingizdan chiqmagan holda ko'cha tilda aytganda HomeWorkOut qilishingiz va bizni platformada mashqlarni ko'rishingiz mumkin!</p>
        <button className='benefit'>Foydalanish</button>
      </div>
    </div>
  </div>
  )
}

export default Services
