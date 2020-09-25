import * as firebase from 'firebase';
//import * as expensesAction from '../actions/expenses';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEADUREMENT_ID
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{firebase, database, googleAuthProvider as default};


// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });


// //child_added
// database.ref('expenses').on('child_added', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());
// });
//fatch data
//   database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
//   });


//   database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });


//   database.ref('expenses').push({
//       description:'phone',
//       note:'',
//       amount:1250,
//       createdAt: 'Aug 20'
//   })

//   database.ref('note').push({
//       title:'lala',
//       body:'React'
//   });


//   database.ref('note/-MHHxdNuLtbl9ydgq94D').update({
//       body:'food'
//   });

//   const notes = {
//       note:{
//           an12:{
//               title:'First Note',
//               body:'my note'
//           },
//           bj34:{
//               title:'Another Note',
//               body:'my note'
//           }
//       }
//   }
//   database.ref().set({
//       name:'Shiyu', 
//       age:25,
//       job:'Software developer',
//       location:{
//           city:'Philadelphia',
//           country:'United States'
//       }
//   }).then(()=>{
//       console.log('Data is saved');
//   }).catch((e)=>{
//       console.log('this failed',e);
//   });

 // database.ref().set('This is my data.');

 //update data
//  database.ref('age').set(27);
//  database.ref('location/city').set('New York');

 //add new attribute
//  database.ref('attribute').set({
//      height:160,
//      weight:52
//  }).then(()=>{
//      console.log('Date is saved');
//  }).catch((e)=>{
//     console.log('failed',e);
//  });


//remove
// database.ref('age').remove().then(()=>{
//         console.log('save');
// }).catch((e)=>{
//     console.log('not remove');
// })

// database.ref('age').set(null);


//update
// database.ref().update({
//     stressLevel:9,
//     age:29,
//     job:'Software developer',
//     'location/city':'Seattle'
// });

//fetch data
// database.ref('location')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('Error fetching data', e);
//     });


// const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
// });

// setTimeout(()=>{
//     database.ref('age').set(28);
// },3500);


// setTimeout(()=>{
//     database.ref().off(onValueChange);

// },7000);
                                                                                                                                            

// setTimeout(()=>{
//     database.ref('age').set(20);
// },13500);

// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} at ${val.location.city}`)
// });


// setTimeout(()=>{
//     database.ref('name').set('Mike');
// },3500);