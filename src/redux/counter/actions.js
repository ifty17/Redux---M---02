// import { DECREMENT, INCREMENET } from "./actionTypes";

// export const increment = (value) => {
//     return {
//         type: INCREMENET,
//         payload: value,
//     };
// };

// export const decrement = (value) => {
//     return {
//         type: DECREMENT,
//         payload: value,
//     };
// };

import { INCREMENT, DECREMENT } from "./actionTypes"

export const increment = (value) =>{
    return{
        type: INCREMENT, 
        payload: value
    }
};
export const decrement = (value) =>{
    return{
        type: DECREMENT, 
        payload: value
    }
};