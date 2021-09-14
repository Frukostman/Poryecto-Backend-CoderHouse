// import Thanks from '../../components/Thanks/Thanks'

import useAppContext from '../../context/useAppContext';

import  {useState} from 'react'


import './Checkout.css'


const Checkout = () => {

const { carrito, sumarPrecioTotal, vaciarCarrito } = useAppContext()

let PrecioTotal = sumarPrecioTotal(carrito);

// const [datos, setDatos] = useState()

const newOrder = {
products: carrito,
total: PrecioTotal
}


const enviarDB = async () => {

//     // setDatos()

   
    try {     
        const response = await fetch('http://localhost:8000/api/cart', {
            method: 'POST',
            body: JSON.stringify(newOrder), // data can be `string` or {object}!
            headers:{
                        'Content-Type': 'application/json'
                    }
        });
        console.log('Completed!', response);
    } catch(err) { 
        console.error(`Error: ${err}`);
    }
    
    vaciarCarrito()
}
   
 return (
        <>         
            <div className="container checkout text-center">
                    <h1 className=" text-muted display-4 pt-2">CHECKOUT</h1>
                    <p className="informacion text-muted pt-2 mb-0">Total de tu compra: </p>
                    <p className=" display-4"> {sumarPrecioTotal(carrito)} <span className="text-muted">$</span></p>
                    <hr/>

                    {/* <form action="http://localhost:8000/api/cart" method="POST">
                        <button type="submit" name="products" value={carrito} className="btn btn-success btn-block mt-3">Finalizar compra.</button>
                    </form> */}

                    <button onClick={enviarDB} className="btn btn-success btn-block mt-3">Finalizar compra.</button>
                    
                    {/* <button onClick={newOrder} className="btn btn-success btn-block mt-3">ver compra.</button> */}

                </div> 
            
        </>
    )
}

export default Checkout