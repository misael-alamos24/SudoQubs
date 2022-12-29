import { GET_SUDOKU } from "./actions";


const initialState= {
    rows: [],
};


const rootReducer = (state= initialState, action)=>{
    switch (action.type) {
        case GET_SUDOKU:
            return {
                ...state,
                rows: action.payload,
            };
        default: return state;
    };
};

export default rootReducer;