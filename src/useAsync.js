// import { useReducer, useEffect, useCallback } from 'react';


// export function reducer(state, action) {
//     switch (action.type) {
//         case 'LOADING':
//             return {
//                 loading: true,
//                 data: null,
//                 error: null,
//             };
//         case 'SUCCESS':
//             return {
//                 loading: false,
//                 data: action.data,
//                 error: null,
//             };
//         case 'ERROR':
//             return {
//                 loading: false,
//                 data: null,
//                 error: action.error,
//             };
//         default:
//             throw new Error(`Unhandled action  type: ${action.type}`);
//     }
// }

// export default function useAsync(callback, deps = [], skip = false) {
//     const [ state, dispatch ] = useReducer(reducer, {
//         loading: false,
//         data: null,
//         error: null,
//     });

//     const fetchData = useCallback(async() =>{
//         dispatch({type: 'LOADING'});
//         try{
//             const data = await callback();
//             dispatch({type: 'SUCCESS', data})
//         }catch(e){
//             dispatch({ type: 'ERROR', error: e})
//         }
//     },[callback]);

//     useEffect(()=>{
//         if(skip){
//             return false
//         }
//         fetchData();
//         //eslint-disable-next-line
//     }, deps)
//     return [state, fetchData]
// }