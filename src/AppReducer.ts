import {IAction, IMovie} from "./Assets/types"


export default function AppReducer(state: any, action: IAction) {
    const actionPayload = action.payload;
    switch (action.type) {



        default:
            return state;
    }
}