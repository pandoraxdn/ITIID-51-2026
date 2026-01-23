//import { Container } from "./components/Container";
//import { CustomForm } from "./components/CustomForm";
//import { TrafficLight } from "./useEffect/TrafficLight";
//import { TrafficLight } from "./useEffect/TrafficLight";
//import { PokemonPage } from "./examples/PokemonPage";
import { TaskApp } from "./useReducer/TaskApp";

const HooksApp = () => {
  return (
    <div
        className="bg-gradient"
    >
      <TaskApp />
        {/*
        <PokemonPage/>
        <Container>
            <CustomForm/>
        </Container>
        <TrafficLight/>
        */}
    </div>
  );
};

export default HooksApp;
