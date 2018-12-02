
import {createStore} from 'redux';

const incrementCount=({incrementBy=1}={})=>({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});
const setCount=({count=100}={})=>({
    type: 'SET',
    count
});
const resetCount=()=>({
    type: 'RESET',
    count:0
})

const countReducer=(state={count :0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count+action.incrementBy
        };
        case 'DECREMENT':
        const decrementBy= typeof action.decrementBy==='number'? action.decrementBy: 1;
        return{
            count: state.count-decrementBy
        };
        case 'RESET':
        return{
            count: 0
        }
        case 'SET':
        return{
            count: action.count
        }
        default :
        return state;
    }
}

const store=createStore(countReducer);

const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 4}));

store.dispatch(decrementCount());


store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 90}));
 

store.dispatch(setCount({count:500}));
console.log(store);