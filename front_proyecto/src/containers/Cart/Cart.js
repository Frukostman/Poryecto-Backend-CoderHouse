import ItemsCart from '../../components/ItemsCart/ItemsCart'
import EmptyCart from '../../components/EmptyCart/EmptyCart'

import useAppContext from '../../context/useAppContext';

import './Cart.css';

const Cart = () => {

    const { carrito } = useAppContext()

    return (

        
        <>
         {
            carrito.length === 0 ?
                <EmptyCart />
                :
                <ItemsCart />
        }
        </>
    )
}

export default Cart