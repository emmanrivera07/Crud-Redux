import React, {useState} from 'react';
import {crearNuevoProducto} from '../actions/productoActions';
import {useDispatch, useSelector} from 'react-redux';

const NuevoProducto = ({history}) => {

    const [nombre, setNombreProducto]=useState('');
    const [precio, setPrecio]=useState(''); 

   const dispatch=useDispatch();

   const agregarProducto=(producto)=>dispatch (crearNuevoProducto(producto));

    const submitNuevoProducto=event=>{
        event.preventDefault(); 
        if(nombre.trim()===''||precio<=0){
            return;
        }

        agregarProducto({
            nombre,
            precio
        });

        //redireccionar
        history.push('/');

    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Nuevo producto

                        </h2>
                        <form onSubmit ={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre del producto</label>
                                <input
                                
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe le nombre del producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={event=>setNombreProducto(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del producto</label>
                                <input
                                
                                    type="number"
                                    className="form-control"
                                    placeholder="Escribe el precio del producto"
                                    name="precio"
                                    value={precio}
                                    onChange={event=>setPrecio(Number( event.target.value))}
                                />
                            </div>
                            <button
                            
                                type="submit"
                                className="btn btn-primary font-weight-bold text-appercase
                                d-block w-100"
                            >Agregar


                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default NuevoProducto;