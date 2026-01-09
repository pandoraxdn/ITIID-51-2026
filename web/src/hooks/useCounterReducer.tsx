import { useReducer } from "react";

export interface AuthReducer {
    count: number;
}

interface CustomReducerCounter{
    estado: AuthReducer;
    add:    () =>void;
    add2:   () =>void;
    dec:    () =>void;
    dec2:   () =>void;
    reset:  () =>void;
}

export const useCounterReducer = ( initialState: AuthReducer ): CustomReducerCounter => {
    type Action = 
        | { type: "add" }
        | { type: "add2" }
        | { type: "dec" }
        | { type: "dec2" }
        | { type: "reset" };

    const countReducer = ( state: AuthReducer, action: Action ) => {
        switch( action.type ){
            case "add":
                return { count: state.count + 1 };
            case "add2":
                return { count: state.count + 2 };
            case "dec":
                return { count: (state.count == 0) ? 0 : state.count - 1 };
            case "dec2":
                return { count: (state.count == 0) ? 0 : state.count - 2 };
            case "reset":
                return { count: initialState.count };
        }
    }

    const [ estado, dispatch ] = useReducer(countReducer, initialState);

    const add   =   () => dispatch({ type: "add" });
    const add2  =   () => dispatch({ type: "add2" });
    const dec   =   () => dispatch({ type: "dec" });
    const dec2  =   () => dispatch({ type: "dec2" });
    const reset =   () => dispatch({ type: "reset" });

    return { estado, add, dec, reset, dec2, add2 };
}
