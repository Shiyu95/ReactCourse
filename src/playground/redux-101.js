import  {createStore} from 'redux';

//Action generators  -function that return action object
const incrementCount = ({incrementBy =1}={}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy =1 }={}) => ({
    type:'DECREMENT',
    decrementBy
});

//reset 
const resetCount = ( ) => ({
    type:'RESET',
    
});

//set
const setCount = ({count}) =>({
    type: 'SET',
    count,
});

//Reducers
//1. Reducers are pure functions: output only determine by input
//2. Never change state or action

const countReducer = ((state = {count:0}, action)=>{
    switch (action.type){
        case 'INCREMENT':
            return{
                count: state.count+ action.incrementBy
            };
         case 'DECREMENT':
            return{
                 count: state.count-action.decrementBy
            };
         case 'RESET':
             return{
                 count: 0
             };
          case 'SET':
             return{
                count: action.count
             };
        default:
          return state;
    }
  });
  

const store = createStore(countReducer);

//watch all change happen for the store
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//increment the count
store.dispatch(incrementCount({ incrementBy:5}))

store.dispatch(incrementCount());

//decrement the count
store.dispatch(decrementCount({ decrementBy:10}));
store.dispatch(decrementCount());

//reset the count
store.dispatch(resetCount());
//reset the count number
store.dispatch(setCount({ count:-100}));
//stop to watch the change happen for the store
unsubscribe();
