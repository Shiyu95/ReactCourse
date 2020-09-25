import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from  './routers/AppRouter';
import configureStore from "./store/configureStore";
import {startSetExpenses} from "./actions/expenses";
import {login, logout} from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'; 
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
//import  './playground/promises';


const store = configureStore();
console.log('test');

//addExpense
// store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt:-1000}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt:-1000}));
// store.dispatch(addExpense({description: 'Rent bill', amount: 109500, createdAt:-1000}));

//setTextFilter
//store.dispatch(setTextFilter('bill'));


//getVisibleExpenses

  // const state = store.getState();
  // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(visibleExpenses);

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
  
);

//make sure app only render single time
let hasRender = false;
const renderApp = () => {
 if(!hasRender){
  ReactDOM.render(jsx, document.getElementById('app'));
  hasRender = true;
 } 
};

ReactDOM.render(<LoadingPage/>,  document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=> {
  if(user){
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard')
      }
    });
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
  });





























// const  Layout =(props)=>{
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };

// ReactDOM.render((
//   <Layout>
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
//   </Layout>
//   ), document.getElementById('app'));





  // class OldSyntax{
  //   constructor(){
  //     this.name = 'Mike';
  //     this.getGreeting = this.getGreeting.bind(this);
  //   }
  //   getGreeting(){
  //     return `Hi!,My name is ${this.name}`;
  //   }
  // }

  // const oldSyntax= new OldSyntax();
  // const getGreeting = oldSyntax.getGreeting;
  // console.log(getGreeting());

  // //-----------------------------

  // class NewSyntax{
  //   name='Jen';
  //   //class always bind with instance
  //   getGreeting=()=>{
  //     return `Hi!,My name is ${this.name}.`;
  //   }
  // }

  // const newSyntax = new NewSyntax();
  // const newGetGreeting = newSyntax.getGreeting;
  // console.log(newGetGreeting());
