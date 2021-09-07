// import Thanks from '../../components/Thanks/Thanks'

import useAppContext from '../../context/useAppContext';
// import { getFirestore } from '../../firebase/index';
import  {useState} from 'react'
// import swal from 'sweetalert';

// import './Checkout.css'


const Checkout = () => {

const { carrito, sumarPrecioTotal, vaciarCarrito } = useAppContext()
const [datos, setDatos] = useState({
    timestamp: Date.now,
    products: carrito
})

const confirmarCompra = () => {
    setDatos(carrito)
    vaciarCarrito()
    console.log(datos)
}


// const [orderId, setOrderId] = useState()
// const [listo, setListo] = useState(false)
// const [datos, setDatos] = useState({
//     nombre: '',
//     apellido: '',
//     telefono: '',
//     email1: '',
//     email2: ''
// })

// //Conectamos con Firebase y vamos a la coleccion de compras realizadas
// const db = getFirestore()
// const orders =  db.collection("orders") 

// //Funcion que envia la compra a Firebase
// const guardarEnFB = () => {  
    
//     //Calcula el valor total
//     let PrecioTotal = sumarPrecioTotal(carrito);
    
//     //formato de nueva orden
//     const newOrder = {
        
//         buyerName: datos.nombre,
//         buyerSurname: datos.apellido,
//         buyerPhone: datos.telefono,
//         buyerMail: datos.email1,
        
//         items: carrito,
//         date: new Date(),
//         totalPrice: PrecioTotal,
//     } 
//     //se guarda la compra a firebase
//     orders.add(newOrder).then(({ id }) => {
//         swal(`Tu comprobante es el N°:${id}, anotalo y no lo pierdas!`)
//         setOrderId(id)
//     }).catch(err => {
//         console.log(err)
//     })
//     .finally((e) => {
//         console.log(e + orderId)
//     }) 
// }

// //Funcion que modifica el comprador
// const guardarDatos = (event) => {
//     setDatos({
//         ...datos,
//         [event.target.name] : event.target.value
//     })
// }    

// //Funcion que chequea el formulario
// const check = (e) => {
//     e.preventDefault()
    
//     if (datos.nombre === "" || datos.apellido === "" || datos.telefono === "" || datos.email1 === "" || datos.email2 === "") {
//         swal("Por favor completá todos los campos solicitados.")
//     }
//     else if (datos.email1 !== datos.email2) {
//         swal("Por favor verificá que las direcciones de mail sean iguales.")
//     } 
//     else {
//         guardarEnFB()
//         vaciarCarrito()
//         setListo(true)          
//     } 
// }


    
 return (
        <>         
            <div className="container checkout text-center">
                    <h1 className=" text-muted display-4 pt-2">CHECKOUT</h1>
                    <p className="informacion text-muted pt-2 mb-0">Total de tu compra: </p>
                    <p className=" display-4"> {sumarPrecioTotal(carrito)} <span className="text-muted">$</span></p>
                    <hr/>

                    <button onClick={confirmarCompra} className="btn btn-success btn-block mt-3">Finalizar compra.</button>
                </div> 
            
        </>
    )
}

export default Checkout