import { GET_EMPLOYEE, GET_EMPLOYEE_FAIL, GET_EMPLOYEE_SUCCESS } from "../Types";


const initialState = {
    loading: false,
    errors: null,
    employee: [],
}
const ReducerEmployee= (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_EMPLOYEE:

            return {
                ...state,
                loading: true,
            };
        case GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: payload,
            };
        case GET_EMPLOYEE_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
            default:
                return state;
        }
    }
    export default ReducerEmployee;