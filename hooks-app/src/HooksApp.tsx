//import { Container } from "./components/Container";
//import { CustomForm } from "./components/CustomForm";
//import { TrafficLight } from "./useEffect/TrafficLight";
//import { TrafficLight } from "./useEffect/TrafficLight";
//import { PokemonPage } from "./examples/PokemonPage";
//import { TaskApp } from "./useReducer/TaskApp";
import {Toaster} from "sonner";
import {RouterProvider} from "react-router";
import {appRouter} from "./useContext/router/app.router";
import {UserContextProvider} from "./useContext/context/UserContext";

const HooksApp = () => {
  return (
    <UserContextProvider>
      <div
        className="bg-gradient"
      >
        <Toaster />
        <RouterProvider router={appRouter} />
        {/*
        <TaskApp />
        <PokemonPage/>
        <Container>
            <CustomForm/>
        </Container>
        <TrafficLight/>
        */}
      </div>
    </UserContextProvider>
  );
};

export default HooksApp;
