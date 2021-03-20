import React, { useContext, useState, useReducer } from 'react';
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
    console.log(cartItems);
    const initialState = {
        loading: false,
        cart: 0,
        total: 0,
        amount: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)


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
        addToCart, ...state
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }