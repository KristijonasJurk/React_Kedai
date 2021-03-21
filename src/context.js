import React, { useContext, useState, useReducer, useEffect } from 'react';
import reducer from './pages/Cart/Reducer'
// import mensProducts from './components/data'
import { sublinks } from './components/data';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    // ====== CART ======
    const initialState = {
        loading: false,
        cart: [],
        total: 100,
        amount: 5
    }
    const addToCart = (data, pickedSize) => {
        dispatch({ type: 'ADD_TO_CART', payload: data })
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }
    const increaseAmount = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }
    const decreaseAmount = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])
    // ====== SIDEBAR AND SUBMENU ======
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: [] })
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{
        // ===== SUBMENU AND SIDEBAR =====
        isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSubmenu, closeSidebar, page, location,
        // ===== CART =====
        ...state, clearCart, removeItem, increaseAmount, decreaseAmount, addToCart
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }