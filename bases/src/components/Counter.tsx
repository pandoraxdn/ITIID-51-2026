//import { useCounter } from "../hooks/useCounter";
import { useCounterReducer, AuthReducer } from "../hooks/useCounterReducer";

interface Props{
    valor?: number;
}

export const Counter = ( {valor = 0} :Props ) => {

    //const { contador, add, dec, reset } = useCounter(valor);
    const initialState: AuthReducer = {
        count: valor
    }

    const { estado, add, dec, reset, add2, dec2 } = useCounterReducer( initialState );

    return (<>
        <h2>Contador: { estado.count }</h2>
        <button
            onClick={ add }
        >
            +1
        </button>
        <button
            onClick={ add2 }
        >
            +2
        </button>
        <button
            onClick={ dec }
        >
            -1
        </button>
        <button
            onClick={ dec2 }
        >
            -2
        </button>
        <button
            onClick={ reset }
        >
            Reset
        </button>
    </>);
}
