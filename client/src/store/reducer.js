import { ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET, SET_PAGINATE } from './type';

const initialState = {
    budget: 5000,
    expenses: [],
    perPage: 0,
    count: 0,
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                ...state, expenses: action.payload,
            };
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        case SET_BUDGET:
            return {
                ...state, budget: action.payload
            };
        case SET_PAGINATE:
            return {
                ...state,
                count: action.payload.count,
                perPage: action.payload.perPage,
            };
        default:
            return state;
    }
};
export default AppReducer;