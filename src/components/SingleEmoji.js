import React from 'react'

const SingleEmoji = ({singleEmoji}) => {
  return (
    <div className='item'>
      
    <p className='emoji1'> {singleEmoji.emoji}</p>
    <p className='emoji2'>{singleEmoji.description}</p>
        
    </div>
  )
}

export default SingleEmoji;
