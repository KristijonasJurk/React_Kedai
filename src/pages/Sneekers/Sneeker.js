import React, { useState, useEffect, useCallback } from 'react'
import Loading from '../../components/Loading'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

const url = 'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name='

const Sneeker = () => {
    const { closeSubmenu } = useGlobalContext();

    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('a')
    const [sneekers, setSneekers] = useState([])

    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            const { results } = data;
            if (results) {
                const newSneekers = results.map((item) => {
                    const { styleId, title, retailPrice, colorway, media } = item;

                    return {
                        id: styleId,
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

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const searchSneeker = () => {
        setSearchTerm(searchValue.current.value)
    }


    return (
        <div className='sneekers-whole' onMouseOver={closeSubmenu}>
            <h3>Sneeker search <span>{sneekers.length} results</span></h3>
            <section className='sneeker-search-container'>
                <form className="sneeker-search-form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Search for your favourite sneeker</label>
                        <input type="text" id='name' ref={searchValue} onChange={searchSneeker} />
                    </div>
                </form>
            </section>
            {loading
                ?
                <Loading />
                :
                <ul className="sneekers-container">
                    {sneekers.map((sneeker) => {
                        const { id, title, price, colors, image } = sneeker;
                        if (!image) {
                            return '';
                        }
                        return (
                            <Link to={`sneeker/${id}`}>
                                <li key={id} className='sneeker-block'>
                                    <img src={image} alt={title} />
                                    <div className="sneeker-footer">
                                        <p>{title}</p>
                                        <p>€{price}</p>
                                        <p>{colors}</p>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default Sneeker
