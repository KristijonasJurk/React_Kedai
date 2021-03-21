import { womensProducts, mensProducts } from '../../components/data'

const reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        let cartProducts = [...state.cart];
        let products = [...womensProducts, ...mensProducts];
        let alreadyInCart = cartProducts.find(item => item.id === action.payload.data.id)
        let pickedProduct = products.find(item => item.id === action.payload.data.id)
        if (!alreadyInCart) {
            let productSize = { ...pickedProduct, size: action.payload.size, amount: action.payload.amount, color: action.payload.color };
            let newProducts = [...cartProducts, productSize]
            return { ...state, cart: newProducts }
        } else {
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.data.id) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem;
            })
            return { ...state, cart: tempCart }
        }
    }
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE') {
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
    }
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem;
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = amount * price;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal
        }, {
            total: 0,
            amount: 0
        })
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }
    return state
}

export default reducer;