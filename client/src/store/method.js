import { ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET, SET_PAGINATE } from './type';
import axios from 'axios';

export const createAction = (postData) => {
    return async (dispatch) => {
        try {
            const { data: { userData } } = await axios.post('http://localhost:8000/send', postData);
            // console.log(userData);
        } catch (error) {
            console.log(error);
            // const { errors } = error.response.data;
        }
    }
}

export const getData = () => {
    return async (dispatch) => {
        try {
            const { data: { response } } = await axios.get(`http://localhost:8000/getAll`);
            dispatch({ type: ADD_EXPENSE, payload: response });
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
};

// export const getData = (page) => {
//     return async (dispatch) => {
//         try {
//             const { data: { response, count, perPage } } = await axios.get(`http://localhost:8000/getAll/${page}`);
//             dispatch({ type: ADD_EXPENSE, payload: response });
//             dispatch({ type: SET_PAGINATE, payload: { count, perPage } });
//             // console.log(response);
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };