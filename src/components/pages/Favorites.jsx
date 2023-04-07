import React from 'react'

function Favorites({ favorites = [] }) {
  // console.log(favorites);
  return (
    favorites.map((item, i) => (
      <div className='d-flex p-40 justify-between' style={{display: 'inline-flex', flexWrap: 'wrap'}}> 
        <div className='d-flex align-center '>
          <div className="card" >
            <img src={item.imageUrl} style={{ marginBottom: '14px' }} width={133} height={112} alt="sneakers" />
            <h5>{item.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{item.price} руб.</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
}

export default Favorites