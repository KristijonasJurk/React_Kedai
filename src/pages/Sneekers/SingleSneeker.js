import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

const url = 'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&styleId='

const SingleSneeker = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('a')
    const [sneekers, setSneekers] = useState([])

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${id}`)
            const data = await response.json();
            const { results } = data;
            if (results) {
                const newSneekers = results.map((item) => {
                    const { styleId, brand, name, releaseDate, title, retailPrice, colorway, media } = item;

                    return {
                        id: styleId,
                        brand: brand,
                        name: name,
                        releaseDate: releaseDate,
                        title: title,
                        price: retailPrice,
                        colors: colorway,
                        image: media.imageUrl,
                    }
                })
                setSneekers(newSneekers)
            } else {
                setSneekers([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [searchTerm])
    useEffect(() => {
        fetchData()
    }, [searchTerm, fetchData])

    return (
        <div>
            <ul className="sneekers-container">
                {sneekers.map((sneeker) => {
                    const { id, title, price, colors, image, brand, name, releaseDate } = sneeker;
                    if (!image) {
                        return '';
                    }
                    return (
                        <li key={id} className='sneeker-block'>
                            <img src={image} alt={title} />
                            <div className="sneeker-footer">
                                <p>{title}</p>
                                <p>€{price}</p>
                                <p>{colors}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SingleSneeker
