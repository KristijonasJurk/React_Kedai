import React, { useState, useEffect, useCallback } from 'react'
import Loading from '../../components/Loading'

const url = 'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name='

const Sneeker = () => {

    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('a')
    const [sneekers, setSneekers] = useState([])

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            const { results } = data;
            if (results) {
                const newSneekers = results.map((item) => {
                    const { id, title, retailPrice, colorway, media } = item;

                    return {
                        id: id,
                        title: title,
                        price: retailPrice,
                        colors: colorway,
                        image: media.imageUrl,
                    }
                })
                setSneekers(newSneekers)
                console.log(sneekers);
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
            {sneekers.map((sneeker, i) => {
                const { id, title, price, colors, image } = sneeker;
                return (
                    // <p>{id}</p>
                    <p>hmm</p>
                )
            })}
        </div>
    )
}

export default Sneeker
