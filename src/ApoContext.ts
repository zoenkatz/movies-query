import {createContext} from "react";
import {IMovie} from "./Assets/types";

interface IState {
    movies: IMovie[];
    query: string;
    dispatch: () => void;
}

const appState: IState = {
    movies: [],
    query: "",
    dispatch: () => {
    },
};

const AppContext = createContext<IState>({
    ...appState,
});

export default AppContext;