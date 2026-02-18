import { Texto } from "./components/Texto";
import { Counter } from "./components/Counter";

const App = () => {
    return (
        <div>
            Hola DSM51
            <Texto
                texto="Saludo"
            />
            <Counter/>
        </div>
    );
}

export default App;
