import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteApp from './components/NoteApp';

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//useState hook
//{count :0, name: '' }
// const App=(props)=> {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState('')

//   useEffect(()=> {
//     console.log('only run once')
//   }, [])

//   useEffect(()=> {
//     console.log('useEffect ran')
//     document.title = count
//   }, [count])
//   // const increment = () => {
//   //   setCount(count+1);
//   //   document.title = count
//   // }
//   return(
//     <div>
//     <p>the current {text || 'count'} is {count}</p>
//     <button onClick={()=>setCount(count+1)}>+1</button>
//     <button onClick={()=>setCount(count-1)}>-1</button>
//     <button onClick={()=>setCount(props.count)}>reset</button>
//     <input value={text} onChange={(e)=> setText(e.target.value)}/>
//   </div>  )
// }

// //useState, setState
// const App=(props)=> {
//   const [state, setState] = useState({
//     count:props.count,
//     text:''
//   });
//   return(
//     <div>
//     <p>the current {state.text|| 'count'} is {state.count}</p>
//     <button onClick={()=>setState({count:state.count+1})}>+1</button>
//     <button onClick={()=>setState({count:state.count-1})}>-1</button>
//     <button onClick={()=>setState({count:props.count})}>reset</button>
//     <input value={state.text} onChange={(e)=> setState({text:e.target.value})}/>
//   </div>  )
// }
