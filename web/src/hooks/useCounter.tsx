import { useState } from "react";

interface UseCounter{
    contador:   number;
    add:        () => void;
    dec:        () => void;
    reset:      () => void;
}

export const useCounter = ( valor: number ): UseCounter => {

    const [ contador, setContador ] = useState<number>(valor);

    const add = () => setContador( prev => prev + 1 );
    const dec = () => setContador( prev => (prev == 0) ? 0 : prev - 1 );
    const reset = () => setContador( valor );

    return { contador, add, dec, reset };
}
