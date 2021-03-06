import {
    GET_SMURFS,
    FOUND_SMURFS,
    ERROR
} from "../actions";

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    error: null,
    message: ''
}

const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {...state,
                fetchingSmurfs: true,
                message: action.payload
            };
        case ERROR:
            return {...state,
                error: action.payload,
                fetchingSmurfs: false
            };
        case FOUND_SMURFS:
            return {...state,
                smurfs: action.payload,
                error: null,
                fetchingSmurfs: false
            };
        default:
            return state;
    }
}

export default smurfReducer;