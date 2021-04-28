import {

    AGREGA_PRODUCTO,
    AGREGA_PRODUCTO_EXITO,
    AGREGA_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_ERROR,
    DESCARGA_PRODUCTO_EXITO
} from '../types';
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';


export function crearNuevoProducto(producto){
    return async(dispatch)=>{
        dispatch (agregarProducto());

        try{
            await clienteAxios.post('/productos', producto);
            dispatch(agregarProductoExito(producto));

            //alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        }catch(error){
            dispatch(agregarProductoError(true));

            //alerta error

            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text: 'Inténtalo de nuevo'
            })
        }
    }

}
const agregarProducto=()=>({
        type: AGREGA_PRODUCTO,
        payload: true
});

const agregarProductoExito=producto=>({
    type: AGREGA_PRODUCTO_EXITO,
    payload:producto
});

const agregarProductoError=estado=>({
    type: AGREGA_PRODUCTO_ERROR,
    payload: estado
});


export function obtenerProductosAction(){
    return async (dispatch)=>{
        dispatch(descargarProductos());

        try{
           const respuesta= await clienteAxios.get('/productos');
            dispatch(descargarProductosExitosa(respuesta.data));
        }catch(error){

            console.log(error);
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos=()=>({
    type: COMENZAR_DESCARGA_PRODUCTO,
    payload:true
});

const descargarProductosExitosa=productos=>({

    type: DESCARGA_PRODUCTO_EXITO,
    payload:productos
});

const descargarProductosError=()=>({
    type: DESCARGA_PRODUCTO_ERROR,
    payload: true
});
