import React from 'react'

const SinglePost = ({item}) => {
  return (
    <div className='__POST'>
        <div className="card">

          <h3>{item.id}: {item.title.substring(0,45)}</h3>
          <p>{item.body.substring(0,200)}</p>
          <button>Text</button>
          </div> 

    </div>
  )
}

export default SinglePost
