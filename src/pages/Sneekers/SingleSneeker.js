import React from 'react'
import { useParams } from 'react-router-dom'

// const url = 'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&page=100'

const SingleSneeker = () => {
    const { id } = useParams()
    return (
        <div>
            <p>{id}</p>
        </div>
    )
}

export default SingleSneeker
