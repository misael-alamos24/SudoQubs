import { GET_SUDOKU, SET_SETTINGS } from "./actions";


const initialState= {
    rows: {},
    settings: {
        ready: false,
        difficulty: 4, 
        size: 4,
    }
};


const rootReducer = (state= initialState, action)=>{
    switch (action.type) {
        case GET_SUDOKU:
            return {
                ...state,
                rows: action.payload,
            };
        case SET_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            }
        default: return state;
    };
};


export default rootReducer;