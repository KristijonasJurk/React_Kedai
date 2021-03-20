import React, { useContext, useState, useReducer, useEffect } from 'react';
import reducer from './pages/Cart/Reducer'
// import mensProducts from './components/data'
import { sublinks } from './components/data';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    // ====== CART ======
    const [cartItems, setCartItems] = useState([])
    const addToCart = (product) => {
        setCartItems(current => [...current, product])
    }
    const initialState = {
        loading: false,
        cart: cartItems,
        total: 100,
        amount: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
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
        addToCart, ...state, clearCart
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }