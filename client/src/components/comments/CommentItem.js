import React from 'react'

const CommentItem = ({comment}) => {
    const {userComment, type} = comment;

    return (
        <div className='card bg-light' style={{height:'auto', width:'93%', margin:'0.5em'}}>
            <h6 className="text-primary text-left">
                {userComment}{' '}
            </h6>
        </div>
    )
}

export default CommentItem;