import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch}from 'react-redux';
import {obtenerProductosAction} from '../actions/productoActions';
import Producto from './Producto';

const Productos = () => {

    const dispatch =useDispatch();
    useEffect(() => {
       //consultar la API
       const cargarProductos=()=>dispatch(obtenerProductosAction());
       cargarProductos();

    }, []);


    const producto=useSelector(state=>state.productos. productos);
    return ( 

        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        producto.length===0 ? 'No hay productos' 
                        : (
                            producto.map(producto=>(
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                        )
                    }
                </tbody>

            </table>
        </Fragment>
     );
}
 
export default Productos;