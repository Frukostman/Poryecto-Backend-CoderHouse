// import Thanks from '../../components/Thanks/Thanks'

import useAppContext from '../../context/useAppContext';

import  {useState} from 'react'


import './Checkout.css'


const Checkout = () => {

const { carrito, sumarPrecioTotal, vaciarCarrito } = useAppContext()

const cart = JSON.stringify(carrito)
console.log(cart)
console.log(carrito)

// const [datos, setDatos] = useState()

// let dato = {name: "productito"}

// const enviarDB = async () => {

//     // setDatos()
//     console.log(carrito)
//     // vaciarCarrito()

//     let dato = JSON.stringify(carrito)
    
//     try {     
//         const response = await fetch('http://localhost:8000/api/cart', {
//             method: 'post',
//             body: dato
//         });
//         console.log('Completed!', response);
//     } catch(err) { 
//         console.error(`Error: ${err}`);
//     }
    
//     vaciarCarrito()
// }
   
 return (
        <>         
            <div className="container checkout text-center">
                    <h1 className=" text-muted display-4 pt-2">CHECKOUT</h1>
                    <p className="informacion text-muted pt-2 mb-0">Total de tu compra: </p>
                    <p className=" display-4"> {sumarPrecioTotal(carrito)} <span className="text-muted">$</span></p>
                    <hr/>

                    <form action="http://localhost:8000/api/cart" method="POST">
                        <button type="submit" name="products" value={carrito} className="btn btn-success btn-block mt-3">Finalizar compra.</button>
                    </form>

                    {/* <button onClick={enviarDB} className="btn btn-success btn-block mt-3">Finalizar compra.</button> */}
                    
                    {/* <button onClick={newOrder} className="btn btn-success btn-block mt-3">ver compra.</button> */}

                </div> 
            
        </>
    )
}

export default Checkout