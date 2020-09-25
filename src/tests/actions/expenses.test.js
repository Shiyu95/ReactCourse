// @ts-nocheck
import { 
    startAddExpense,
    addExpense, 
    editExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense, 
    startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {database} from '../../firebase/firebase'


const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const uid = 'this is the test id';
const defaultAuthState = {auth:{uid}};

beforeEach((done)=> {
    const expenseData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expenseData[id] = {description, note, amount, createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expenseData).then(()=> done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});



test('should remove expense from firebase', (done) => {
    const store = mockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });


test('should setup edit expense action object', () => {
    const action = editExpense('123abc',{note:'New note value' });
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc', 
        updates:{
            note:'New note value'
        }
    });
});


test('should edit expense from firebase', (done)=> {
    const store = mockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {amount:21845};
    store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id, 
        updates
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    });
});


test('should add expense to database amd store', (done)=> {
    const store = mockStore(defaultAuthState);
    const expenseData = {
        description:'Mouse',
        amount:3000,
        note:'this one better',
        createdAt:1000 }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value');
     }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });





test('should add expense with default to database amd store', (done)=> {
    const store = mockStore(defaultAuthState);
    const expenseDefaults = {
        description:'',
        amount:0,
        note:'',
        createdAt:0
        };

    store.dispatch(startAddExpense({})).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value');
     }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });

});


test('should setup set expense action object with data ', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
      type:'SET_EXPENSES',
      expenses
  })
});



test('should fetch the expenses from firebase', (done)=> {
    const store = mockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=> {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    });
});

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             id: expect.any(String),
//             description:'',
//             note:'',
//             amount:0,
//             createdAt:0
//         }
//     });
    
// });