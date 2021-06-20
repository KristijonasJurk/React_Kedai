import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { RiArrowGoBackFill } from 'react-icons/ri'

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
                    const { styleId, brand, releaseDate, title, retailPrice, colorway, media } = item;

                    return {
                        id: styleId,
                        brand: brand,
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
        <div className='single-sneeker-container'>
            <Link to='/kedai/pages/sneekers'>Go Back  <RiArrowGoBackFill /></Link>
            {loading
                ?
                <Loading />
                :
                <div>
                    {sneekers.map((sneeker) => {
                        const { id, title, price, colors, image, brand, releaseDate } = sneeker;
                        return (
                            <div className="single-sneeker" key={id}>
                                <section className='single-sneeker-image'>
                                    <img src={image} alt={title} />
                                </section>
                                <section className="single-sneeker-info">
                                    <p>Brand: <span>{brand}</span></p>
                                    <p>Full name: <span>{title}</span></p>
                                    <p>Retail price: <span>€{price}</span></p>
                                    <p>Available colors: <span>{colors}</span></p>
                                    <p>Release date: <span>{releaseDate}</span></p>
                                    <p>For inquiries please contact our sales department at sales@kedai.lt</p>
                                </section>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default SingleSneeker
