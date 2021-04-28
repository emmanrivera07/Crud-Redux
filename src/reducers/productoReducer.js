import {

    AGREGA_PRODUCTO,
    AGREGA_PRODUCTO_EXITO,
    AGREGA_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_ERROR,
    DESCARGA_PRODUCTO_EXITO
} from '../types';

const initialState={
 productos: [],
 error: false,
 loading: false
}

export default function (state =initialState, action){
    switch (action.type) {
        
        case COMENZAR_DESCARGA_PRODUCTO:
        case AGREGA_PRODUCTO:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGA_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                productos: [...state.productos, action.payload]
            }
        case AGREGA_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTO_ERROR: 
            return{
                ...state,
                loading:false,
                error: action.payload
            }

        case DESCARGA_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                error:false,
                productos:action.payload
            }

        default:
            return state;
    }
}